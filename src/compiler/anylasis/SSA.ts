import { Identifier, Type } from "../type";
import { Operation as WasmOperation} from "./Operation";

export type Expression = Constant | Operation | LocalIdentifier | ArgIdentifier | FunctionIdentifier | IfBranch;

export class Constant {
    constructor(public idx: number, public val: number, public type: Type){}
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

export class Operation {
    constructor(public idx: number, public sources: number[], public op: WasmOperation){}
}

export class IfBranch {
    constructor(public idx: number, public pred_idx: number, public then_idx: number, public else_idx: number){}
}
