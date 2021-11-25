import { decodeInt32, decodeUInt32 } from "./leb/leb";
import { WasmFunction } from "./codegen"
import { T } from "./primitiveTypes";
import { Identifier, Type } from "../type";

export class BuiltinFunction {
    constructor(public name: Identifier, public type: Type, public args: Type[], public wasm: WasmFunction){}
}

const builtins = [
    {name: "stack_alloc", args: ["i32"], type: "i32"},
    {name: "reset_alloc", args: [], type: "void"},
    {name: "Point", args: ["f64", "f64"], type: "Point"}
]

export async function decompile(path: string): Promise<{functions: BuiltinFunction[], data_count: number, static_data: Uint8Array}> {
    const bin = await (await fetch(path)).arrayBuffer();
    const arr = new Uint8Array(bin);
    const encoder = new TextEncoder();
    const header = encoder.encode("\0asm");

    const {value: header_match, nextIndex: version_idx} = match(arr, 0, header);
    if(!header_match) throw "bad magic number";
    const wasm_version = new Uint32Array(arr.buffer, 4, 4)[0];
    const {value: types, nextIndex: import_idx} = decompile_types(arr, 8);
    const {nextIndex: function_idx} = decompile_imports(arr, import_idx);
    const {value: func_ids, nextIndex: datacount_idx} = decompile_functions(arr, function_idx);
    const {datacount, nextIndex: code_idx} = decompile_datacount(arr, datacount_idx);
    const {functions, nextIndex: data_idx} = decompile_code(arr, code_idx);
    const {value: data, nextIndex: _} = decompile_data(arr, data_idx);
    
    let wasm_functions = [];
    if(func_ids.length != functions.length){
        throw "mismatched function ids";
    }
    if(func_ids.length != builtins.length){
        throw "wrong number of function names";
    }
    for(let i = 0; i < func_ids.length; i++){
        const args = types[func_ids[i]].args;
        const type = types[func_ids[i]].type;
        const wasm_func = new WasmFunction(builtins[i].name, args, type, functions[i].code, functions[i].locals);
        wasm_functions.push(new BuiltinFunction(new Identifier(builtins[i].name), builtins[i].type as Type, builtins[i].args as Type[], wasm_func));
    }

    return {functions: wasm_functions, data_count: datacount, static_data: data};
}

class FuncType {
    constructor(public args: Uint8Array[], public type: Uint8Array){};
}

function decompile_data(arr: Uint8Array, start_idx: number): {value: Uint8Array, nextIndex: number} {
    const {value: id, nextIndex: size_idx} = decodeInt32(arr, start_idx);
    if(id != 11) throw "not a data section";
    
    const {value: section_size, nextIndex: data_idx} = decodeInt32(arr, size_idx);

    return {value: arr.subarray(data_idx, data_idx + section_size), nextIndex: data_idx + section_size};
}

function match(arr: Uint8Array, start_idx: number, dest: Uint8Array): {value: boolean, nextIndex: number}{
    if(arr.length < dest.length + start_idx) return {value: false, nextIndex: start_idx + dest.length};
    for(let i = 0; i < dest.length; i++){
        if(dest[i] != arr[i+ start_idx]) return {value: false, nextIndex: start_idx + dest.length};
    }

    return {value: true, nextIndex: start_idx + dest.length}
}

function decompile_locals(arr: Uint8Array, start_idx: number) : {locals: Uint8Array[], nextIndex: number} {
    const {value: count, nextIndex: locals_start} = decodeInt32(arr, start_idx);

    let locals = [];
    for(let i = 0; i < count; i++){
        locals.push(new Uint8Array([arr[locals_start + i]]));
    }

    return {locals, nextIndex: locals_start + count};
}

function decompile_code(arr: Uint8Array, start_idx: number) : {functions: {locals: Uint8Array[], code: Uint8Array}[], nextIndex: number} {
    const {value: id, nextIndex: size_idx} = decodeInt32(arr, start_idx);
    if(id != 10) throw "not a code section";
    const {value: section_size, nextIndex: code_vec_idx} = decodeInt32(arr, size_idx);
    const {value: code_count, nextIndex: vec_start_idx} = decodeInt32(arr, code_vec_idx);
    
    
    let funcs = [];
    let next_vec_idx = vec_start_idx;
    for(let i = 0; i < code_count; i++){
        const {value: code_len, nextIndex: locals_start} = decodeUInt32(arr, next_vec_idx);
        const {locals: locals, nextIndex: code_start} = decompile_locals(arr, locals_start);
        funcs.push({locals, code: arr.subarray(code_start, code_start + code_len - locals.length - 1)});
        next_vec_idx = locals_start + code_len;
    }

    return {functions: funcs, nextIndex: section_size + code_vec_idx};
}

function decompile_datacount(arr: Uint8Array, start_idx: number) : {datacount: number, nextIndex: number} {
    const {value: id, nextIndex: size_idx} = decodeInt32(arr, start_idx);
    if(id != 12) return {datacount: -1, nextIndex: start_idx};
    const {value: section_size, nextIndex: datacount_idx} = decodeInt32(arr, size_idx);
    const {value: datacount, nextIndex: end_idx} = decodeInt32(arr, datacount_idx);
    return {datacount: datacount, nextIndex: end_idx};
}

function decompile_imports(arr: Uint8Array, start_idx: number) : {nextIndex: number} {
    const {value: id, nextIndex: length_idx} = decodeInt32(arr, start_idx);
    if(id != 2) throw "not a import section";
    const {value: length, nextIndex: idx} = decodeInt32(arr, length_idx);
    const end_idx = length + idx;
    return {nextIndex: end_idx};
}

function decompile_functions(arr: Uint8Array, start_idx: number) : {value: number[], nextIndex: number} {
    const {value: id, nextIndex: length_idx} = decodeInt32(arr, start_idx);
    if(id != 3) throw "not a function section";
    const {value: length, nextIndex: idx} = decodeInt32(arr, length_idx);
    const end_idx = length + idx;
    const {value: func_count, nextIndex: vec_start_idx} = decodeInt32(arr, idx);

    let func_ids = [];
    let next_vec_idx = vec_start_idx;
    for(let i = 0; i < func_count; i++){
        const {value: id, nextIndex: next_idx} = decodeUInt32(arr, next_vec_idx);
        next_vec_idx = next_idx;
        func_ids.push(id);
    }

    return {value: func_ids, nextIndex: end_idx};
}

function decompile_types(arr: Uint8Array, start_idx: number): {value: FuncType[], nextIndex: number}{
    const {value: id, nextIndex: length_idx} = decodeInt32(arr, start_idx);
    if(id != 1) throw "not a type section";
    const {value: length, nextIndex: idx} = decodeInt32(arr, length_idx);
    const end_idx = idx + length;
    const {value: type_count, nextIndex: vec_start_idx} = decodeInt32(arr, idx);

    let types = [];
    let next_vec_idx = vec_start_idx;
    for(let i = 0; i < type_count; i++){
        const {value: type, nextIndex: next_idx} = decompile_type(arr, next_vec_idx);
        next_vec_idx = next_idx;
        types.push(type);
    }

    return {value: types, nextIndex: end_idx};
}

function decode_type(arr: Uint8Array, start_idx: number): Uint8Array {
    return new Uint8Array([arr[start_idx]]);
    // if(match(arr, start_idx, T.i32).value) return "i32";
    // if(match(arr, start_idx, T.i64).value) return "i64";
    // if(match(arr, start_idx, T.f32).value) return "f32";
    // if(match(arr, start_idx, T.f64).value) return "f64";
    // throw "unexpected type";
}

function decompile_type(arr: Uint8Array, start_idx: number): {value: FuncType, nextIndex: number} {
    const {value: is_func, nextIndex: inputs_idx} = match(arr, start_idx, T.func);
    if(!is_func) throw "only function types allowed";
    
    const {value: num_inputs, nextIndex: input_vec_idx} = decodeInt32(arr, inputs_idx);
    let args = [];
    for(let i = 0; i < num_inputs; i++){
        args.push(decode_type(arr, input_vec_idx + i));
    }

    const {value: num_outpus, nextIndex: output_vec_idx} = decodeInt32(arr, input_vec_idx + num_inputs);
    if(num_outpus > 1) throw "too many outputs";
    let return_types = [];
    for(let i = 0; i < num_outpus; i++){
        return_types.push(decode_type(arr, output_vec_idx + i));
    }
    
    let return_type = return_types.length ? return_types[0] : new Uint8Array(0);
    return {value: new FuncType(args, return_type), nextIndex: output_vec_idx + num_outpus};
}
