import { decompile } from "./compiler/codegen/decompile";
import { Compiler } from "./compiler/compiler";
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

fn trap() -> i32 {
    return 0 / 0;
}

fn if_fn2(a: i32) -> i32{
    return if(a < 0){
        return if(a < 5){
            return if(a < 5){
                return 5;
            } else {
                return if(a < 10){
                    return if(a < 5){
                        return 5;
                    } else {
                        return if(a < 10){
                            return 10;
                        } else {
                            return if(a < 15){
                                return 15;
                            } else {
                                return if(a < 20){
                                    return 20;
                                } else {
                                    return if(a < 25){
                                        return if(a < 5){
                                            return 5;
                                        } else {
                                            return if(a < 10){
                                                return 10;
                                            } else {
                                                return if(a < 15){
                                                    return 15;
                                                } else {
                                                    return if(a < 20){
                                                        return 20;
                                                    } else {
                                                        return if(a < 25){
                                                            return 25;
                                                        } else {
                                                            return 30;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    } else {
                                        return 30;
                                    };
                                };
                            };
                        };
                    };
                } else {
                    return if(a < 15){
                        return 15;
                    } else {
                        return if(a < 20){
                            return 20;
                        } else {
                            return if(a < 25){
                                return 25;
                            } else {
                                return 30;
                            };
                        };
                    };
                };
            };
        } else {
            return if(a < 10){
                return 10;
            } else {
                return if(a < 15){
                    return 15;
                } else {
                    return if(a < 20){
                        return 20;
                    } else {
                        return if(a < 25){
                            return 25;
                        } else {
                            return 30;
                        };
                    };
                };
            };
        };
    } else {
        return if(a < 5){
            return 5;
        } else {
            return if(a < 10){
                return 10;
            } else {
                return if(a < 15){
                    return 15;
                } else {
                    return if(a < 20){
                        return 20;
                    } else {
                        return if(a < 25){
                            return 25;
                        } else {
                            return 30;
                        };
                    };
                };
            };
        };
    };
}

`


async function main(){
    const builtins = await decompile("../cppsrc/stack_alloc.wasm");

    const binary = new Compiler(builtins.functions, builtins.data_count, builtins.static_data).compile(input)

    const {instance} = await WebAssembly.instantiate(binary);
    (globalThis as any).e = instance.exports;
}
main();


// console.time("compile");
// const binary = new Compiler().compile(input);
// console.timeEnd("compile");

