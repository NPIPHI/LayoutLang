(module
  (type (;0;) (func (param i32) (result i32)))
  (type (;1;) (func))
  (type (;2;) (func (param f64 f64) (result i32)))
  (type (;3;) (func (param i32 i32) (result i32)))
  (import "env" "__linear_memory" (memory (;0;) 1))
  (func $stack_alloc (type 0) (param i32) (result i32)
    (local i32)
    i32.const 0
    i32.const 0
    i32.load
    local.tee 1
    local.get 0
    i32.add
    i32.store
    local.get 1)
  (func $reset_alloc (type 1)
    i32.const 0
    i32.const 128
    i32.store)
  (func $point (type 2) (param f64 f64) (result i32)
    (local i32)
    i32.const 0
    i32.load
    local.tee 2
    local.get 1
    f64.store offset=8
    local.get 2
    local.get 0
    f64.store
    i32.const 0
    local.get 2
    i32.const 16
    i32.add
    i32.store
    local.get 2)
  (func $__add_point (type 3) (param i32 i32) (result i32)
    (local i32)
    i32.const 0
    i32.const 0
    i32.load
    local.tee 2
    i32.const 16
    i32.add
    i32.store
    local.get 2
    local.get 0
    f64.load
    local.get 1
    f64.load
    f64.add
    f64.store
    local.get 2
    local.get 0
    f64.load offset=8
    local.get 1
    f64.load offset=8
    f64.add
    f64.store offset=8
    local.get 2)
  (func $point_array (type 0) (param i32) (result i32)
    (local i32 f64 i32)
    i32.const 0
    i32.const 0
    i32.load
    local.tee 1
    local.get 0
    i32.const 4
    i32.shl
    i32.add
    i32.store
    block  ;; label = @1
      local.get 0
      i32.const 1
      i32.lt_s
      br_if 0 (;@1;)
      f64.const 0x0p+0 (;=0;)
      local.set 2
      local.get 1
      local.set 3
      loop  ;; label = @2
        local.get 3
        local.get 2
        f64.store
        local.get 3
        i32.const 8
        i32.add
        i64.const 4617315517961601024
        i64.store
        local.get 3
        i32.const 16
        i32.add
        local.set 3
        local.get 2
        f64.const 0x1p+0 (;=1;)
        f64.add
        local.set 2
        local.get 0
        i32.const -1
        i32.add
        local.tee 0
        br_if 0 (;@2;)
      end
    end
    local.get 1)
  (data $_ZL9stack_ptr (i32.const 0) "\80\00\00\00"))
