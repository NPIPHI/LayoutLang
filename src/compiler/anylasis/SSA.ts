import { Identifier, Operation } from "../parse/expression";

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
    constructor(public idx: number, public func: Identifier){}
}

export class BinaryOp {
    constructor(public idx: number, public left: number, public right: number, public op: Operation){}
}
