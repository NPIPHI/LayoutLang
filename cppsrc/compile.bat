clang --target=wasm32 -emit-llvm -c stack_alloc.cpp -O3
llc -march=wasm32 -filetype=obj stack_alloc.bc -o stack_alloc.wasm
rm stack_alloc.bc
wasm2wat stack_alloc.wasm -o stack_alloc.wat