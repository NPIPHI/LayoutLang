import { Parser } from "./parser"
import { WasmOutput } from "./codegen"


// export class Compiler{
//     compile(input: string): Uint8Array {
//         const parser = new Parser();
//         return new WasmOutput(parser.parse(input)).encode();
//     }
// };

export class Compiler {
    public compile(input: string): Uint8Array {
        const parser = new Parser();
        const output = new WasmOutput(parser.parse(input));

        return output.encode();
    }
}