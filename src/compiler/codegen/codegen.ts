import { IRFunction } from "../anylasis/SSAFunction";
import { encodeInt32, encodeInt64, encodeF32, encodeF64 } from "./leb/leb";
import * as SSA from "../anylasis/SSA"
import { BuiltinFunction } from "./decompile";
import { Type } from "../type";
import * as I from "../instructions"
import { T, PrimitiveType, get_primitive_type } from "./primitiveTypes";

export type ExportKind = Uint8Array;

function make_lenth_encoding(buffers: Uint8Array[]): Uint8Array {
    const length = buffers.reduce((a,b)=>a + b.byteLength, 0);
    return I.merge([encodeInt32(length), ...buffers]);
}

function make_vec(buffers: Uint8Array[]): Uint8Array {
    return I.merge([encodeInt32(buffers.length), ...buffers])
}

function make_sized_vec(buffers: Uint8Array[]): Uint8Array {
    const length_buffers = buffers.reduce((a,b)=>a + b.byteLength, 0);
    const count = encodeInt32(buffers.length);
    const length = encodeInt32(length_buffers + count.length);
    return I.merge([length, count, ...buffers])
}

function make_constant(constant: SSA.Constant){
    switch(constant.type){
        case T.i32:
            return [I.i32.const, encodeInt32(constant.val)];
        case T.f32:
            return [I.f32.const, encodeF32(constant.val)];
        case T.i64:
            return [I.i64.const, encodeInt64(constant.val)];
        case T.f64:
            return [I.f64.const, encodeF64(constant.val)];
        default:
            throw "no known constant scheme for type: " + constant.type;
    }
}

function gen_if(code: SSA.Expression[], expr: SSA.IfBranch, function_map: Map<string, number>, depth: number): Uint8Array[]{
    return [
        ...gen_code(code, expr.pred_idx, function_map, depth), 
        T.branch_if_else, expr.type,         
            ...gen_code(code, expr.then_idx, function_map, depth + 1), 
        T.branch_else,
            ...gen_code(code, expr.else_idx, function_map, depth + 1),
        T.branch_end,
    ];
}

function gen_code(code: SSA.Expression[], idx: number, function_map: Map<string, number>, depth: number) : Uint8Array[]{
    const expr = code[idx];
    if(expr instanceof SSA.Constant){
        return make_constant(expr);
    } else if(expr instanceof SSA.ArgIdentifier){
        return [I.local.get, encodeInt32(expr.src_idx)];
    } else if(expr instanceof SSA.LocalIdentifier){
        return gen_code(code, expr.src_idx, function_map, depth);
    } else if(expr instanceof SSA.FunctionIdentifier){
        return [...expr.args.flatMap(n=>gen_code(code, n, function_map, depth)), I.call, encodeInt32(function_map.get(expr.func.name))];
    } else if(expr instanceof SSA.Operation){
        return [...expr.sources.flatMap(s=>gen_code(code, s, function_map, depth)), expr.op.code];
    } else if(expr instanceof SSA.IfBranch){
        return gen_if(code, expr, function_map, depth);
    } else {
        throw "unexpected ssa expression";
    }
}

function get_primitve_type_or_void(t: Type): PrimitiveType | 0 {
    if(t == "void") return 0;
    return get_primitive_type(t);
}

function make_wasm_function(func: IRFunction, function_map: Map<string, number>): WasmFunction {
    let code: Uint8Array[] = gen_code(func.SSA, func.SSA.length - 1, function_map, 0);
    code.push(I.end_func);
    return new WasmFunction(func.name.name, func.args.map(get_primitive_type), get_primitve_type_or_void(func.return_type), I.merge(code), []);
}

export class WasmFunction {
    constructor(public name: string, public inputs: PrimitiveType[], public output: PrimitiveType | 0, public code: Uint8Array, public locals: PrimitiveType[]){}

    encodeType(): Uint8Array {
        const func_type = T.func;
        const num_inputs = encodeInt32(this.inputs.length);
        const num_outputs = encodeInt32((this.output != 0) ? 1 : 0);
        const output = this.output || new Uint8Array(0);

        return I.merge([func_type, num_inputs, ...this.inputs, num_outputs, output]);
    }

    encodeCode(): Uint8Array {
        const local_declarations = make_vec(this.locals);
      
        return make_lenth_encoding([local_declarations, this.code]);
    }
}

class TypeSection {
    constructor(public functions: WasmFunction[]){}

    encode(): Uint8Array {
        const id = encodeInt32(1);
        const type_encodings = this.functions.map(f=>f.encodeType())

        return I.merge([id, make_sized_vec(type_encodings)]);
    }
}

class FunctionSection {
    constructor(public functions: WasmFunction[]){}

    encode(): Uint8Array {
        const id = T.function_section;
        const index_functions = this.functions.map((_,i)=>encodeInt32(i));

        return I.merge([id, make_sized_vec(index_functions)]);
    }
}

class FunctionExport {
    constructor(public func: WasmFunction, public exportIndex: number){}

    encode(): Uint8Array {
        const encoder = new TextEncoder();
        const name = encoder.encode(this.func.name);
        const name_size = encodeInt32(name.length);
        const index = encodeInt32(this.exportIndex);

        return I.merge([name_size, name, T.export_func, index]);
    }
}

class MemoryExport {
    constructor(public name: string){}
    encode(): Uint8Array {
        const encoder = new TextEncoder();
        const name = encoder.encode(this.name);
        const name_size = encodeInt32(name.length);
        const index = encodeInt32(0);

        return I.merge([name_size, name, T.export_mem, index]);
    }
}

class ExportSection {
    constructor(public exports: (FunctionExport | MemoryExport)[]){}

    encode(): Uint8Array {
        const id = T.export_section;
        const exports = this.exports.map(e=>e.encode());
    
        return I.merge([id, make_sized_vec(exports)]);
    }
}

class CodeSection {
    constructor(public functions: WasmFunction[]){}

    encode(): Uint8Array {
        const id = T.code_section;
        const funcs = this.functions.map(f=>f.encodeCode());
        
        return I.merge([id, make_sized_vec(funcs)]);
    }
}

class Memory {
    constructor(public min: number, public max: number | undefined){}

    encode(): Uint8Array {
        if(this.max != undefined){
            const min = encodeInt32(this.min);
            const max = encodeInt32(this.max);
            return I.merge([T.limit_min_max, min, max]);
        } else {
            const min = encodeInt32(this.min);
            return I.merge([T.limit_min, min]);
        }
        
    }
}

class MemorySection{
    encode(): Uint8Array {
        const id = T.memory_section;
        const mem = new Memory(1, undefined).encode()

        return I.merge([id, make_sized_vec([mem])]);
    }
}

class DataSection{
    constructor(public static_data: Uint8Array){}

    encode(): Uint8Array {
        const id = T.data_section;
        const len = encodeInt32(this.static_data.length);
        return I.merge([id, len, this.static_data]);
    }
}

class DataCountSection{
    constructor(public data_count: number){}

    encode(): Uint8Array {
        const id = T.data_count_section;
        const data = encodeInt32(this.data_count);
        const len = encodeInt32(data.length);
        return I.merge([id, len, data]);
    }
}

export class WasmOutput {
    constructor(public funcs: IRFunction[], public builtins: BuiltinFunction[], public data_count: number, public static_data: Uint8Array){}

    encode(): Uint8Array {
        const encoder = new TextEncoder();

        const header = encoder.encode("\0asm");
        const binary_version = new Uint8Array(new Uint32Array([1]).buffer);
        let func_map = new Map<string, number>();
        this.builtins.forEach((f,i)=>func_map.set(f.name.name, i));
        this.funcs.forEach((f,i)=>func_map.set(f.name.name, i + this.builtins.length));
        const funcs = [...this.builtins.map(b=>b.wasm), ...this.funcs.map(f=>make_wasm_function(f, func_map))];
        const type_data = new TypeSection(funcs).encode();
        const function_data = new FunctionSection(funcs).encode();
        const export_data = new ExportSection([...funcs.map((f,i)=>new FunctionExport(f, i)), new MemoryExport("memory")]).encode();
        const code_data = new CodeSection(funcs).encode();
        const memory_data = new MemorySection().encode();
        const static_data = new DataSection(this.static_data).encode();
        const data_count_data = new DataCountSection(this.data_count).encode();

        return I.merge([header, binary_version, type_data, function_data, memory_data, export_data, data_count_data, code_data, static_data]);
    }
}