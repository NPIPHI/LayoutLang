import { Parser } from "./parse/parser"
import { WasmOutput } from "./codegen/codegen"
import { IRRepresentation } from "./anylasis/IRRepresentation";
import { TypedProgram } from "./anylasis/TypedFunction";
import { BuiltinFunction } from "./codegen/decompile";
import { InlineFunction } from "./codegen/inlineFunctions";

export class Compiler {
    public constructor(public builtins: BuiltinFunction[], public inlines: InlineFunction[], public data_count: number, public static_data: Uint8Array){};
    public compile(input: string): Uint8Array {
        const parsed = new Parser().parse(input);
        const typed = new TypedProgram(parsed, this.builtins, this.inlines);
        const IR = new IRRepresentation(typed);
        const output = new WasmOutput(IR.funcs, this.builtins, this.inlines, this.data_count, this.static_data).encode();

        return output;
    }
}