import { WasmOutput, T, Function} from "./codegen";
import { decodeInt32 } from "./leb/leb";
const funcs = [
    new Function("main", [], T.i32),
    new Function("main2", [], T.i32)
];

const wasm_output = new WasmOutput(funcs);

const output = wasm_output.encode();

async function main(){
    let {module, instance} = await WebAssembly.instantiate(output);
    console.log((instance.exports as any).main());
    (globalThis as any).inst = instance;
}
main();

console.log(decodeInt32(new Uint8Array([0xc8,0x01]), 0))
