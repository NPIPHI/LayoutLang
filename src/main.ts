import { WasmOutput, T, Function, CodeSection, ExportSection, TypeSection, FunctionSection, Export } from "./codegen";
const funcs = [
    new Function([], [T.i32])
];

const exports_arr = [
    new Export("main", 0, 0)
];

const type_section = new TypeSection(funcs);
const function_section = new FunctionSection(funcs);
const export_section = new ExportSection(exports_arr);
const code_section = new CodeSection(funcs);
const wasm_output = new WasmOutput(type_section, function_section, export_section, code_section);

const output = wasm_output.encode();

async function main(){
    let {module, instance} = await WebAssembly.instantiate(output);
    (globalThis as any).inst = instance;
}
main();
