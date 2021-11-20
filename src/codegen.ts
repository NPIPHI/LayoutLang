import { encodeInt32 } from "./leb/leb";

console.log(encodeInt32(70000));

// export class WasmOutput {
//     type_section: any;
//     function_section: any;
//     export_section: any;
//     code_section: any;

//     constructor(){

//     }

//     compile(): ArrayBuffer {
//         const encoder = new TextEncoder();
//         const header = encoder.encode("\0asm");
//         const binary_version = new Uint32Array([1]);

//         return new ArrayBuffer(0);
//     }
// }