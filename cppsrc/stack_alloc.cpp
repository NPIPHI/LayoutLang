constexpr int BLOCK_SIZE = 1 << 16;
constexpr int BASE_STACK_PTR = 128;
#define get_size() (__builtin_wasm_memory_size(0))


#define grow_memory(blocks) (__builtin_wasm_memory_grow(0, blocks))



static int stack_ptr = BASE_STACK_PTR;
extern "C" {
    int stack_alloc(int size){
        auto aligned_size = (size - 1) / 8 * 8 + 8;
        auto needed_blocks = (stack_ptr + aligned_size) / BLOCK_SIZE + 1;
        auto has_blocks = get_size();
        if(needed_blocks > has_blocks){
            auto did_grow = grow_memory(needed_blocks - has_blocks);
            if(did_grow == -1){
                __builtin_unreachable();
            }
        }
        auto ptr = stack_ptr;
        stack_ptr += aligned_size;
        return ptr;
    }   
    void reset_alloc(){
        stack_ptr = BASE_STACK_PTR;
    }
    
}