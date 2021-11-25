import { PrimitiveType } from "../codegen/primitiveTypes";
import { MapExpression } from "../parse/expression";
import { Identifier } from "../type";
import { Operation as WasmOperation} from "./Operation";

export type Expression = Constant | Operation | LocalIdentifier | ArgIdentifier | FunctionIdentifier | IfBranch | MapExpression;

export class Constant {
    constructor(public idx: number, public val: number, public type: PrimitiveType){}
}

export class LocalIdentifier {
    constructor(public idx: number, public src_idx: number, public type: PrimitiveType){}
}

export class ArgIdentifier {
    constructor(public idx: number, public src_idx: number, public type: PrimitiveType){}
}

export class FunctionIdentifier {
    constructor(public idx: number, public func: Identifier, public args: number[], public type: PrimitiveType){}
}

export class Operation {
    constructor(public idx: number, public sources: number[], public op: WasmOperation, public type: PrimitiveType){}
}

export class IfBranch {
    constructor(public idx: number, public pred_idx: number, public then_idx: number, public else_idx: number, public type: PrimitiveType){}
}

export class Map {
    constructor(public idx: number, public generator_idx: number, public func: Identifier, public args: number[], public type: PrimitiveType){}
}
