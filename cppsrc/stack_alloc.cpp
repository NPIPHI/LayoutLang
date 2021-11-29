constexpr int BLOCK_SIZE = 1 << 16;
constexpr int BASE_STACK_PTR = 128;
#define get_size() (__builtin_wasm_memory_size(0))


#define grow_memory(blocks) (__builtin_wasm_memory_grow(0, blocks))
#define DONT_GROW_MEM

struct Point
{
    double x,y;
};


static int stack_ptr = BASE_STACK_PTR;
extern "C" {
    
    void* stack_alloc(int size){
#ifdef DONT_GROW_MEM
        auto ptr = stack_ptr;
        stack_ptr += size;
        return (void*)ptr;
#else
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
        return (void*)ptr;
#endif
    }   
    void reset_alloc(){
        stack_ptr = BASE_STACK_PTR;
    }
    Point* point(double x, double y){
        auto pt = (Point*)stack_alloc(sizeof(Point));
        pt->x = x;
        pt->y = y;
        return pt;
    }

    Point* __add_point(Point* a, Point* b){
        auto pt = (Point*)stack_alloc(sizeof(Point));
        pt->x = a->x + b->x;
        pt->y = a->y + b->y;
        return pt;
    }

    void* point_array(int n){
        auto points = (Point*)stack_alloc(sizeof(Point)*n);
        auto head = points;
        for(int i = 0; i < n; i++){
            *points++ = {double(i), 5};
        }
        return head;
    }
}