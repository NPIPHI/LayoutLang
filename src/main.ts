import { WasmOutput, T, Function} from "./compiler/codegen";
import * as antlr from 'antlr4';
import LayoutLangLexer from "./parse/LayoutLangLexer";
import LayoutLangParser from "./parse/LayoutLangParser";

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
`fn add(a:i32 b:i32 c:i32 d:f32) -> i32 {
    let a = 4;
    let b = a + 3;
    return a + b; 
}`
const chars = new antlr.InputStream(input);
const lexer = new LayoutLangLexer(chars) as any;
const tokens = new antlr.CommonTokenStream(lexer);
const parser = new LayoutLangParser(tokens) as any;
parser.buildParseTrees = true;
const tree = parser.body();

class Visitor{
    visitChildren(ctx: any) {
        if(!ctx){
            return;
        }

        if(ctx.children){
            return ctx.children.map((child: any) => {
                if(child.children && child.children.length != 0) {
                    return child.accept(this);
                } else {
                    return child.getText();
                }
            });
        }
    }
}

console.log(tree.accept(new Visitor()));