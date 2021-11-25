import { Identifier, Type } from "../type";
import * as I from "../instructions"

export class InlineFunction {
    constructor(public type: Type, public args: Type[], public name: Identifier, public code: Uint8Array[]){};

    encode(): Uint8Array[]{
        return this.code;
    }
}

export const inline_functions: InlineFunction[] = [
    new InlineFunction("f64", ["i64"], new Identifier("i64_to_f64"), [I.f64.convert_i64_s]),
    new InlineFunction("f64", ["i32"], new Identifier("i32_to_f64"), [I.f64.convert_i32_s]),
    new InlineFunction("f64", ["f32"], new Identifier("f32_to_f64"), [I.f64.promote_f32]),

    new InlineFunction("i64", ["f64"], new Identifier("f64_to_i64"), [I.i64.trunc_f64_s]),
    new InlineFunction("i64", ["i32"], new Identifier("i32_to_i64"), [I.i64.extend_i32_s]),
    new InlineFunction("i64", ["f32"], new Identifier("f32_to_i64"), [I.i64.trunc_f32_s]),
    
    new InlineFunction("f32", ["i64"], new Identifier("i64_to_f32"), [I.f32.convert_i64_s]),
    new InlineFunction("f32", ["i32"], new Identifier("i32_to_f32"), [I.f32.convert_i32_s]),
    new InlineFunction("f32", ["f64"], new Identifier("f64_to_f32"), [I.f32.demote_f64]),

    new InlineFunction("i32", ["i64"], new Identifier("i64_to_i32"), [I.i32.wrap_i64]),
    new InlineFunction("i32", ["f64"], new Identifier("f64_to_i32"), [I.i32.trunc_f64_s]),
    new InlineFunction("i32", ["f32"], new Identifier("f32_to_i32"), [I.i32.trunc_f32_s]),
]