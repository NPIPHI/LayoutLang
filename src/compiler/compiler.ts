import { Parser } from "./parse/parser"
import { WasmOutput } from "./codegen/codegen"
import { IRRepresentation } from "./anylasis/IRRepresentation";

export class Compiler {
    public compile(input: string): Uint8Array {
        console.time("parse");
        const parsed = new Parser().parse(input);
        console.timeEnd("parse");
        console.time("ir");
        const IR = new IRRepresentation(parsed);
        console.timeEnd("ir");
        console.time("codegen");
        const output = new WasmOutput(IR.funcs).encode();
        console.timeEnd("codegen");

        return output;
    }
}