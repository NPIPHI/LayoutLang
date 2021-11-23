import { Identifier } from "../parse/expression";
import { Operation } from "./TypedFunction";

export type Expression = Constant | BinaryOp | LocalIdentifier | ArgIdentifier | FunctionIdentifier;

export class Constant {
    constructor(public idx: number, public val: number){}
}

export class LocalIdentifier {
    constructor(public idx: number, public src_idx: number){}
}

export class ArgIdentifier {
    constructor(public idx: number, public src_idx: number){}
}

export class FunctionIdentifier {
    constructor(public idx: number, public func: Identifier, public args: number[]){}
}

export class BinaryOp {
    constructor(public idx: number, public left: number, public right: number, public op: Operation){}
}
