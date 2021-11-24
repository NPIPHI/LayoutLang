import { decompile } from "./compiler/codegen/decompile";
import { Compiler } from "./compiler/compiler";
const code_area = document.getElementById("code-area");
const console_area = document.getElementById("console-area");
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

const starting_code = 
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

`
let builtins: any = null;

window.onload = async ()=>{
    builtins = await decompile("../cppsrc/stack_alloc.wasm");
    (code_area as any).editor.setValue(starting_code);
    setInterval(update, 16);
}

async function update(){
    const input = (code_area as any).editor.getValue();
    try {
        const binary = new Compiler(builtins.functions, builtins.data_count, builtins.static_data).compile(input);
        const {instance} = await WebAssembly.instantiate(binary);
        const result = (instance.exports as any).main();
        console.log(result);
        console_area.innerHTML = result;
    } catch(e){
        console.log(e.toString());
        console_area.innerHTML = e.toString();
    } 
}
