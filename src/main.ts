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
fn if_func(a: i32) -> i32{
    return if(a < 2){
        return if(a < -10){
            return 0;
        } else {
            return a + 2;
        };
    } else {
        return a * 100;
    };
}

fn if_fun2(a: i32) -> i32{
    return if(a < 2){
        return if(a < -10){
            return 0;
        } else {
            return a + 2;
        };
    } else {
        return a * 100;
    };
}


fn if_func3(a: i32) -> i32{
    return if(a < 2){
        return if(a < -10){
            return 0;
        } else {
            return a + 2;
        };
    } else {
        return a * 100;
    };
}


fn if_func4(a: i32) -> i32{
    return if(a < 2){
        return if(a < -10){
            return 0;
        } else {
            return a + 2;
        };
    } else {
        return a * 100;
    };
}

fn make_squared(a: i32) -> i32 {
    return square(a);
}


`


async function main(){
    const builtins = await decompile("../cppsrc/stack_alloc.wasm");

    console.time("compile");
    for(let i = 0; i < 1000; i++){
        const binary = new Compiler(builtins.functions, builtins.data_count, builtins.static_data).compile(input)
    }
    console.timeEnd("compile");

    const binary = new Compiler(builtins.functions, builtins.data_count, builtins.static_data).compile(input)

    
    const {module, instance} = await WebAssembly.instantiate(binary);
    console.log((instance.exports as any).if_func(1));
    (globalThis as any).e = instance.exports;
}
main();


// console.time("compile");
// const binary = new Compiler().compile(input);
// console.timeEnd("compile");

