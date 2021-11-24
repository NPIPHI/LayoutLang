import { Type } from "../type";

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
    export const data_count_section = new Uint8Array([0x0c]);
    export const func = new Uint8Array([0x60]);
    export const i32 = new Uint8Array([0x7f]);
    export const i64 = new Uint8Array([0x7e]);
    export const f32 = new Uint8Array([0x7d]);
    export const f64 = new Uint8Array([0x7c]);
    export const export_func = new Uint8Array([0x00]);
    export const export_table = new Uint8Array([0x01]);
    export const export_mem = new Uint8Array([0x02]);
    export const export_global = new Uint8Array([0x03]);
    export const limit_min = new Uint8Array([0x00]);
    export const limit_min_max = new Uint8Array([0x01]);
    export const branch_if_else = new Uint8Array([0x04]);
    export const branch_else = new Uint8Array([0x05]);
    export const branch_end = new Uint8Array([0x0B]);
}

export type PrimitiveType = Uint8Array;

export function get_primitive_type(t: Type): PrimitiveType {
    if(t == "void") throw "void has no primitive type"
    return {
        "i32": T.i32,
        "i64": T.i64,
        "f32": T.f32,
        "f64": T.f64,
        "bool": T.i32,
    }[t]
}