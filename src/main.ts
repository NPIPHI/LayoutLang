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

fn bad_types(a: i32, b: i32) -> i32 {
    return a + b;
}

fn main(a: i32) -> i32 {
    return add(a, a);
}

fn add(a: i32, b : i32) -> i32{
    return a + b;
}

`


console.time("compile");
const binary = new Compiler().compile(input);
console.timeEnd("compile");

WebAssembly.instantiate(binary).then(m=>{
    console.log((m.instance.exports as any).bad_types(1));
    (globalThis as any).inst = m.instance;
});
