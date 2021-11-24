import {Type} from '../type'
import * as Untyped from "../parse/expression"
import * as I from "../instructions"
import { encodeF32, encodeF64, encodeInt32 } from '../codegen/leb/leb'

export class Operation {
    constructor(public type: Type, public args: Type[], public code: Uint8Array){};
}

const binary_op_table = [
    {o: "+", l: "i32", r: "i32", v: new Operation("i32", ["i32", "i32"], I.i32.add)},
    {o: "-", l: "i32", r: "i32", v: new Operation("i32", ["i32", "i32"], I.i32.sub)},
    {o: "*", l: "i32", r: "i32", v: new Operation("i32", ["i32", "i32"], I.i32.mul)},
    {o: "/", l: "i32", r: "i32", v: new Operation("i32", ["i32", "i32"], I.i32.div_s)},
    {o: "%", l: "i32", r: "i32", v: new Operation("i32", ["i32", "i32"], I.i32.rem_s)},
    {o: "==", l: "i32", r: "i32", v: new Operation("bool", ["i32", "i32"], I.i32.eq)},
    {o: "!=", l: "i32", r: "i32", v: new Operation("bool", ["i32", "i32"], I.i32.ne)},
    {o: "<", l: "i32", r: "i32", v: new Operation("bool", ["i32", "i32"], I.i32.lt_s)},
    {o: "<=", l: "i32", r: "i32", v: new Operation("bool", ["i32", "i32"], I.i32.le_s)},
    {o: ">", l: "i32", r: "i32", v: new Operation("bool", ["i32", "i32"], I.i32.gt_s)},
    {o: ">=", l: "i32", r: "i32", v: new Operation("bool", ["i32", "i32"], I.i32.ge_s)},

    {o: "+", l: "i64", r: "i64", v: new Operation("i64", ["i64", "i64"], I.i64.add)},
    {o: "-", l: "i64", r: "i64", v: new Operation("i64", ["i64", "i64"], I.i64.sub)},
    {o: "*", l: "i64", r: "i64", v: new Operation("i64", ["i64", "i64"], I.i64.mul)},
    {o: "/", l: "i64", r: "i64", v: new Operation("i64", ["i64", "i64"], I.i64.div_s)},
    {o: "%", l: "i64", r: "i64", v: new Operation("i64", ["i64", "i64"], I.i64.rem_s)},
    {o: "==", l: "i64", r: "i64", v: new Operation("bool", ["i64", "i64"], I.i64.eq)},
    {o: "!=", l: "i64", r: "i64", v: new Operation("bool", ["i64", "i64"], I.i64.ne)},
    {o: "<", l: "i64", r: "i64", v: new Operation("bool", ["i64", "i64"], I.i64.lt_s)},
    {o: "<=", l: "i64", r: "i64", v: new Operation("bool", ["i64", "i64"], I.i64.le_s)},
    {o: ">", l: "i64", r: "i64", v: new Operation("bool", ["i64", "i64"], I.i64.gt_s)},
    {o: ">=", l: "i64", r: "i64", v: new Operation("bool", ["i64", "i64"], I.i64.ge_s)},

    {o: "+", l: "f32", r: "f32", v: new Operation("f32", ["f32", "f32"], I.f32.add)},
    {o: "-", l: "f32", r: "f32", v: new Operation("f32", ["f32", "f32"], I.f32.sub)},
    {o: "*", l: "f32", r: "f32", v: new Operation("f32", ["f32", "f32"], I.f32.mul)},
    {o: "/", l: "f32", r: "f32", v: new Operation("f32", ["f32", "f32"], I.f32.div)},
    {o: "==", l: "f32", r: "f32", v: new Operation("bool", ["f32", "f32"], I.f32.eq)},
    {o: "!=", l: "f32", r: "f32", v: new Operation("bool", ["f32", "f32"], I.f32.ne)},
    {o: "<", l: "f32", r: "f32", v: new Operation("bool", ["f32", "f32"], I.f32.lt)},
    {o: "<=", l: "f32", r: "f32", v: new Operation("bool", ["f32", "f32"], I.f32.le)},
    {o: ">", l: "f32", r: "f32", v: new Operation("bool", ["f32", "f32"], I.f32.gt)},
    {o: ">=", l: "f32", r: "f32", v: new Operation("bool", ["f32", "f32"], I.f32.ge)},

    {o: "+", l: "f64", r: "f64", v: new Operation("f64", ["f64", "f64"], I.f64.add)},
    {o: "-", l: "f64", r: "f64", v: new Operation("f64", ["f64", "f64"], I.f64.sub)},
    {o: "*", l: "f64", r: "f64", v: new Operation("f64", ["f64", "f64"], I.f64.mul)},
    {o: "/", l: "f64", r: "f64", v: new Operation("f64", ["f64", "f64"], I.f64.div)},
    {o: "==", l: "f64", r: "f64", v: new Operation("bool", ["f64", "f64"], I.f64.eq)},
    {o: "!=", l: "f64", r: "f64", v: new Operation("bool", ["f64", "f64"], I.f64.ne)},
    {o: "<", l: "f64", r: "f64", v: new Operation("bool", ["f64", "f64"], I.f64.lt)},
    {o: "<=", l: "f64", r: "f64", v: new Operation("bool", ["f64", "f64"], I.f64.le)},
    {o: ">", l: "f64", r: "f64", v: new Operation("bool", ["f64", "f64"], I.f64.gt)},
    {o: ">=", l: "f64", r: "f64", v: new Operation("bool", ["f64", "f64"], I.f64.ge)},
]

const unary_op_table = [
    {o: "-", e: "i32", v: new Operation("i32", ["i32"], I.merge([I.i32.const, encodeInt32(-1), I.i32.mul]))},
    {o: "-", e: "i64", v: new Operation("i64", ["i64"], I.merge([I.i64.const, encodeInt32(-1), I.i64.mul]))},
    {o: "-", e: "f32", v: new Operation("f32", ["f32"], I.merge([I.f32.const, encodeF32(-1), I.f32.mul]))},
    {o: "-", e: "f64", v: new Operation("f64", ["f64"], I.merge([I.f64.const, encodeF64(-1), I.f64.mul]))},
]

// export type Operation = I32Operation;
export function make_binary_op(left: Type, op: Untyped.Operation, right: Type): Operation{
    for(const operation of binary_op_table){
        if(operation.o == op && operation.l == left && operation.r == right){
            return operation.v;
        }
    }

    throw `no binary operation "${op}" exists between types "${left}" and "${right}"`;
}

export function make_unary_op(expr: Type, op: Untyped.Operation): Operation{
    for(const operation of unary_op_table){
        if(operation.o == op && operation.e == expr){
            return operation.v;
        }
    }

    throw `no unarty operation "${op}" exists on type "${expr}"`;
}