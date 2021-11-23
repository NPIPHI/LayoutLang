import { Parser } from "./parse/parser"
import { WasmOutput } from "./codegen/codegen"
import { IRRepresentation } from "./anylasis/IRRepresentation";
import { TypedProgram } from "./anylasis/TypedFunction";

export class Compiler {
    public compile(input: string): Uint8Array {
        const parsed = new Parser().parse(input);
        const typed = new TypedProgram(parsed);
        const IR = new IRRepresentation(typed);
        const output = new WasmOutput(IR.funcs).encode();

        return output;
    }
}