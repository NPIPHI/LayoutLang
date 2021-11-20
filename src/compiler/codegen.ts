import { encodeInt32 } from "./leb/leb";

export namespace T {
    export const type_section = new Uint8Array([0x01]);
    export const import_section = new Uint8Array([0x02]);
    export const function_section = new Uint8Array([0x03]);
    export const table_section = new Uint8Array([0x04]);
    export const memory_section = new Uint8Array([0x05]);
    export const global_section = new Uint8Array([0x06]);
    export const export_section = new Uint8Array([0x07]);
    export const start_section = new Uint8Array([0x08]);
    export const element_section = new Uint8Array([0x09]);
    export const code_section = new Uint8Array([0x0a]);
    export const data_section = new Uint8Array([0x0b]);
    export const func = new Uint8Array([0x60]);
    export const i32 = new Uint8Array([0x7f]);
    export const u32 = new Uint8Array([0x7e]);
    export const f32 = new Uint8Array([0x7d]);
    export const f64 = new Uint8Array([0x7c]);
    export const export_func = new Uint8Array([0x00]);
    export const export_table = new Uint8Array([0x01]);
    export const export_mem = new Uint8Array([0x02]);
    export const export_global = new Uint8Array([0x03]);
    export const limit_min = new Uint8Array([0x00]);
    export const limit_min_max = new Uint8Array([0x01]);
}

namespace I {
    export const i32 = {
        const: new Uint8Array([0x41]),
        load: new Uint8Array([0x28]),
        store: new Uint8Array([0x36]),
        eqz: new Uint8Array([0x45]),
        eq: new Uint8Array([0x46]),
        ne: new Uint8Array([0x47]),
        lt_s: new Uint8Array([0x48]),
        lt_u: new Uint8Array([0x49]),
        gt_s: new Uint8Array([0x4A]),
        gt_u: new Uint8Array([0x4B]),
        le_s: new Uint8Array([0x4C]),
        le_u: new Uint8Array([0x4D]),
        ge_s: new Uint8Array([0x4E]),
        ge_u: new Uint8Array([0x4F]),
        clz: new Uint8Array([0x67]),
        ctz: new Uint8Array([0x68]),
        popcnt: new Uint8Array([0x69]),
        add: new Uint8Array([0x6A]),
        sub: new Uint8Array([0x6B]),
        mul: new Uint8Array([0x6C]),
        div_s: new Uint8Array([0x6D]),
        div_u: new Uint8Array([0x6E]),
        rem_s: new Uint8Array([0x6F]),
        rem_u: new Uint8Array([0x70]),
        and: new Uint8Array([0x71]),
        or: new Uint8Array([0x72]),
        xor: new Uint8Array([0x73]),
        shl: new Uint8Array([0x74]),
        shr_s: new Uint8Array([0x75]),
        shr_u: new Uint8Array([0x76]),
        rotl: new Uint8Array([0x77]),
        rotr: new Uint8Array([0x78]),
    }

    export const memory = {
        grow: new Uint8Array([0x40, 0x00]),
        size: new Uint8Array([0x3f, 0x00])
    }

    export const drop = new Uint8Array([0x1A]);
    export const select = new Uint8Array([0x1B]);
    export const _return = new Uint8Array([0x0f]);
    export const end_func = new Uint8Array([0x0b]);
}

export type PrimitiveType = Uint8Array;
export type ExportKind = Uint8Array;
function merge_buffers(buffers: Uint8Array[]): Uint8Array{
    const length = buffers.reduce((a,b)=>a + b.byteLength, 0);
    const merged = new Uint8Array(length);
    
    let idx = 0;
    for(const buffer of buffers){
        merged.set(buffer, idx);
        idx += buffer.byteLength;
    }

    return merged;
}

function make_lenth_encoding(buffers: Uint8Array[]): Uint8Array {
    const length = buffers.reduce((a,b)=>a + b.byteLength, 0);
    return merge_buffers([encodeInt32(length), ...buffers]);
}

function make_vec(buffers: Uint8Array[]): Uint8Array {
    return merge_buffers([encodeInt32(buffers.length), ...buffers])
}

function make_sized_vec(buffers: Uint8Array[]): Uint8Array {
    const length_buffers = buffers.reduce((a,b)=>a + b.byteLength, 0);
    const count = encodeInt32(buffers.length);
    const length = encodeInt32(length_buffers + count.length);
    return merge_buffers([length, count, ...buffers])
}

export class Function {
    constructor(public name: string, public inputs: PrimitiveType[], public output: PrimitiveType | 0){}

    encodeType(): Uint8Array {
        const func_type = T.func;
        const num_inputs = encodeInt32(this.inputs.length);
        const num_outputs = encodeInt32((this.output != 0) ? 1 : 0);
        const output = this.output || new Uint8Array(0);

        return merge_buffers([func_type, num_inputs, ...this.inputs, num_outputs, output]);
    }

    encodeCode(): Uint8Array {
        const local_declarations = encodeInt32(0);
        const lines = [
            // I.i32.const,
            // encodeInt32(43),
            I.i32.const,
            encodeInt32(10),
            I.memory.grow,
            I.drop, 
            I.memory.size,
            I.end_func
        ]

        return make_lenth_encoding([local_declarations, ...lines]);
    }
}

class TypeSection {
    constructor(public functions: Function[]){}

    encode(): Uint8Array {
        const id = encodeInt32(1);
        const type_encodings = this.functions.map(f=>f.encodeType())

        return merge_buffers([id, make_sized_vec(type_encodings)]);
    }
}

class FunctionSection {
    constructor(public functions: Function[]){}

    encode(): Uint8Array {
        const id = T.function_section;
        const index_functions = this.functions.map((_,i)=>encodeInt32(i));

        return merge_buffers([id, make_sized_vec(index_functions)]);
    }
}

class FunctionExport {
    constructor(public func: Function, public exportIndex: number){}

    encode(): Uint8Array {
        const encoder = new TextEncoder();
        const name = encoder.encode(this.func.name);
        const name_size = encodeInt32(name.length);
        const index = encodeInt32(this.exportIndex);

        return merge_buffers([name_size, name, T.export_func, index]);
    }
}

class MemoryExport {
    constructor(public name: string){}
    encode(): Uint8Array {
        const encoder = new TextEncoder();
        const name = encoder.encode(this.name);
        const name_size = encodeInt32(name.length);
        const index = encodeInt32(0);

        return merge_buffers([name_size, name, T.export_mem, index]);
    }
}

class ExportSection {
    constructor(public exports: (FunctionExport | MemoryExport)[]){}

    encode(): Uint8Array {
        const id = T.export_section;
        const exports = this.exports.map(e=>e.encode());
    
        return merge_buffers([id, make_sized_vec(exports)]);
    }
}

class CodeSection {
    constructor(public functions: Function[]){}

    encode(): Uint8Array {
        const id = T.code_section;
        const funcs = this.functions.map(f=>f.encodeCode());
        
        return merge_buffers([id, make_sized_vec(funcs)]);
    }
}

class Memory {
    constructor(public min: number, public max: number | undefined){}

    encode(): Uint8Array {
        if(this.max != undefined){
            const min = encodeInt32(this.min);
            const max = encodeInt32(this.max);
            return merge_buffers([T.limit_min_max, min, max]);
        } else {
            const min = encodeInt32(this.min);
            return merge_buffers([T.limit_min, min]);
        }
        
    }
}

class MemorySection{
    encode(): Uint8Array {
        const id = T.memory_section;
        const mem = new Memory(1, undefined).encode()

        return merge_buffers([id, make_sized_vec([mem])]);
    }
}

export class WasmOutput {
    constructor(public funcs: Function[]){}

    encode(): Uint8Array {
        const encoder = new TextEncoder();

        const header = encoder.encode("\0asm");
        const binary_version = new Uint8Array(new Uint32Array([1]).buffer);
        
        const type_data = new TypeSection(this.funcs).encode();
        const function_data = new FunctionSection(this.funcs).encode();
        const export_data = new ExportSection([...this.funcs.map((f,i)=>new FunctionExport(f, i)), new MemoryExport("memory")]).encode();
        const code_data = new CodeSection(this.funcs).encode();
        const memory_data = new MemorySection().encode();

        return merge_buffers([header, binary_version, type_data, function_data, memory_data, export_data, code_data]);
    }
}