import { TypedProgram } from "./TypedFunction";
import { IRFunction, make_IRFunctions } from "./SSAFunction";

export class IRRepresentation {
    funcs: IRFunction[];
    constructor(prog: TypedProgram){
        this.funcs = make_IRFunctions(prog.funcs);
    }
}