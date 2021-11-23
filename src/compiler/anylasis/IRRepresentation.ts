import { ParserFunction } from "../parse/statment";
import { IRFunction, make_IRFunctions } from "./function";

export class IRRepresentation {
    funcs: IRFunction[];
    constructor(funcs: ParserFunction[]){
        this.funcs = make_IRFunctions(funcs);
    }
}