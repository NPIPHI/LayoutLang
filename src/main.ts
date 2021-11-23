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


async function main(){
    const input = 
    `fn square(a:i32 b:i32 c:i32) -> i32 {
        let val = a + b + c;
        let val2 = val + val;
        return val2 + 3;
    }`
    console.time("compile");
    const binary = new Compiler().compile(input);
    console.timeEnd("compile");
    console.time("instantiate");
    const {module, instance} = await WebAssembly.instantiate(binary);
    console.timeEnd("instantiate");
    (globalThis as any).inst = instance;
    console.time("run");
    console.log("square(100)=" + (instance.exports as any).square(10, 5, 6))
    console.timeEnd("run");

    console.log(binary.length);
}

setInterval(main, 1000);
