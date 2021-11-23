(module
  (type (;0;) (func (param i32 i32) (result i32)))
  (import "env" "__linear_memory" (memory (;0;) 0))
  (import "env" "add" (func (;0;) (type 0)))
  (func $add2 (type 0) (param i32 i32) (result i32)
    local.get 0
    local.get 1
    call 0))
