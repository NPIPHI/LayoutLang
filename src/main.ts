import { decompile } from "./compiler/codegen/decompile";
import { inline_functions } from "./compiler/codegen/inlineFunctions";
import { Compiler } from "./compiler/compiler";

const starting_code = 
`
fn main() -> Point {
    let a = i64_to_f64(i32_to_i64(f32_to_i32(f64_to_f32(3.532))));
    return Point(a,3.3);
}

`

if(true){
    (async ()=>{
        const builtins = await decompile("../cppsrc/stack_alloc.wasm");
        const binary = new Compiler(builtins.functions, inline_functions, builtins.data_count, builtins.static_data).compile(starting_code);
        const {instance} = await WebAssembly.instantiate(binary);
        const result = (instance.exports as any).main();
        console.log(result);
        (globalThis as any).e = instance.exports;
    })();
} else {
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


let builtins: any = null;
let last_text: string = "";
window.onload = async ()=>{
    builtins = await decompile("../cppsrc/stack_alloc.wasm");
    (code_area as any).editor.setValue(starting_code);
    setInterval(update, 16);
}

async function update(){
    const input = (code_area as any).editor.getValue();
    if(input == last_text) return;
    last_text = input;
    try {
        const start = performance.now();
        const binary = new Compiler(builtins.functions, inline_functions, builtins.data_count, builtins.static_data).compile(input);
        const compile = performance.now();
        const {instance} = await WebAssembly.instantiate(binary);
        const instantiate = performance.now();
        const result = (instance.exports as any).main();
        const end = performance.now();

        const compile_time = compile - start;
        const instantiate_time = instantiate - compile;
        const run_time = end - instantiate;
        
        const display_str = 
            `
            Compiled in ${compile_time.toFixed(2)}ms<br>
            Instantiate in ${instantiate_time.toFixed(2)}ms<br>
            Run in ${run_time.toFixed(2)}ms<br>
            Result: ${result}
            `
        console_area.innerHTML = display_str;
    } catch(e){
        console.log(e.toString());
        console_area.innerHTML = e.toString();
    } 
}
}