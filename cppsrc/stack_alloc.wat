(module
  (type (;0;) (func (param i32) (result i32)))
  (type (;1;) (func))
  (import "env" "__linear_memory" (memory (;0;) 1))
  (func $stack_alloc (type 0) (param i32) (result i32)
    (local i32 i32 i32 i32)
    memory.size
    local.set 1
    block  ;; label = @1
      i32.const 0
      i32.load
      local.tee 2
      local.get 0
      i32.const -1
      i32.add
      i32.const 8
      i32.div_s
      i32.const 3
      i32.shl
      i32.const 8
      i32.add
      local.tee 3
      i32.add
      local.tee 0
      i32.const 65536
      i32.div_s
      local.tee 4
      local.get 1
      i32.const 16
      i32.shl
      local.tee 1
      i32.le_u
      br_if 0 (;@1;)
      local.get 4
      local.get 1
      i32.sub
      memory.grow
      drop
      i32.const 0
      i32.load
      local.tee 2
      local.get 3
      i32.add
      local.set 0
    end
    i32.const 0
    local.get 0
    i32.store
    local.get 2)
  (func $reset_mem (type 1)
    i32.const 0
    i32.const 128
    i32.store)
  (data $_ZL9stack_ptr (i32.const 0) "\80\00\00\00"))
