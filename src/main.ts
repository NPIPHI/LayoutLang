import { decompile } from "./compiler/codegen/decompile";
import { decodeInt32, encodeInt32 } from "./compiler/codegen/leb/leb";
import {Compiler} from "./compiler/compiler";
// const funcs = [
//     new Function("main", [], T.i32),
//     new Function("main2", [], T.i32)
// ];

// const wasm_output = new WasmOutput(funcs);

// const output = wasm_output.encode();

// async function main(){

//     let {module, instance} = await WebAssembly.instantiate(output);
//     console.log("Binary Size: ", output.length);
//     console.log((instance.exports as any).main());
//     (globalThis as any).inst = instance;
// }
// main();

const input = 
`
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

`

async function main(){
    const builtins = await decompile("../cppsrc/stack_alloc.wasm");
    const binary = new Compiler(builtins.functions, builtins.data_count, builtins.static_data).compile(input)
    
    const {module, instance} = await WebAssembly.instantiate(binary);
    (globalThis as any).inst = instance;
}
main();


// console.time("compile");
// const binary = new Compiler().compile(input);
// console.timeEnd("compile");

