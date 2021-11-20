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
}

namespace I {
    export const i32 = {
        const: new Uint8Array([0x41]),
    }

    export const _return = new Uint8Array([0x0f]);
    export const end_func = new Uint8Array([0x0b]);
}

export type PrimitiveType = Uint8Array;
export type ExportKind = 0;
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

export class Function {
    constructor(public inputs: PrimitiveType[], public outputs: PrimitiveType[]){}

    encodeType(): Uint8Array {
        const func_type = T.func;
        const num_inputs = encodeInt32(this.inputs.length);
        const num_outputs = encodeInt32(this.outputs.length);

        return merge_buffers([func_type, num_inputs, ...this.inputs, num_outputs, ...this.outputs]);
    }

    encodeCode(): Uint8Array {
        const local_declarations = encodeInt32(0);
        const line1 = I.i32.const;
        const line2 = encodeInt32(42);
        const line3 = I._return;
        const end = I.end_func;

        const data = merge_buffers([local_declarations, line1, line2, line3, end]);
        const data_size = encodeInt32(data.length);

        return merge_buffers([data_size, data]);
    }
}

export class TypeSection {
    constructor(public functions: Function[]){}

    encode(): Uint8Array {
        const id = encodeInt32(1);
        const num_types = encodeInt32(this.functions.length);
        const type_encodings = this.functions.map(f=>f.encodeType())

        const data = merge_buffers([num_types, ...type_encodings]);
        const data_size = encodeInt32(data.length);

        return merge_buffers([id, data_size, data]);
    }
}

export class FunctionSection {
    constructor(public functions: Function[]){}

    encode(): Uint8Array {
        const id = T.function_section;

        const num_functions = encodeInt32(this.functions.length);
        const index_functions = this.functions.map((_,i)=>encodeInt32(i));

        const data = merge_buffers([num_functions, ...index_functions]);
        const data_size = encodeInt32(data.length);

        return merge_buffers([id, data_size, data]);
    }
}

export class Export {
    constructor(public name: string, public kind: ExportKind, public exportIndex: number){}

    encode(): Uint8Array {
        const encoder = new TextEncoder();
        const name = encoder.encode(this.name);
        const name_size = encodeInt32(name.length);
        const kind = encodeInt32(this.kind);
        const index = encodeInt32(this.exportIndex);

        return merge_buffers([name_size, name, kind, index]);
    }
}

export class ExportSection {
    constructor(public exports: Export[]){}

    encode(): Uint8Array {
        const id = T.export_section;
        const num_exports = encodeInt32(this.exports.length);
        const exports = this.exports.map(e=>e.encode());
        const data = merge_buffers([num_exports, ...exports]);
        const data_size = encodeInt32(data.length);

        return merge_buffers([id, data_size, data]);
    }
}

export class CodeSection {
    constructor(public functions: Function[]){}

    encode(): Uint8Array {
        const id = T.code_section;
        const num_funcs = encodeInt32(this.functions.length);
        const funcs = this.functions.map(f=>f.encodeCode());
        
        const data = merge_buffers([num_funcs, ...funcs]);
        const data_len = encodeInt32(data.length);

        return merge_buffers([id, data_len, data]);
    }
}

export class WasmOutput {
    constructor(public type_section: TypeSection, public function_section: FunctionSection, public export_section: ExportSection, public code_section: CodeSection){}

    encode(): Uint8Array {
        const encoder = new TextEncoder();

        const header = encoder.encode("\0asm");
        const binary_version = new Uint8Array(new Uint32Array([1]).buffer);
        
        const type_data = this.type_section.encode();
        const function_data = this.function_section.encode();
        const export_data = this.export_section.encode();
        const code_data = this.code_section.encode();

        return merge_buffers([header, binary_version, type_data, function_data, export_data, code_data]);
    }
}