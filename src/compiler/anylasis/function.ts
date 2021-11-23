import { BinaryOp, Expression, Identifier, Operation, Constant, FunctionCall} from "../parse/expression";
import { Argument, LetStatment, ParserFunction, ReturnStatement, Type } from "../parse/statment";
import * as SSA from "./SSA"

export class WasmFunction{
    constructor(public name: Identifier, public args: Argument[], public code: Uint8Array){}
}

class FunctionSymbol{
    constructor(func: ParserFunction){
        this.name = func.name;
        this.args = func.args;
        this.return_type = func.return_type;
    }
    name: Identifier;
    args: Argument[];
    return_type: Type;
}

class ValueSymbol{
    constructor(name: Identifier, ssa_index: number){
        this.name = name;
        this.ssa_index = ssa_index;
        this.value_type = "i32";
    }
    name: Identifier;
    value_type: Type;
    ssa_index: number;
}

class ArgSymbol{  
    constructor(arg: Argument, idx: number){
        this.name = arg.identifier;
        this.value_type = arg.type;
        this.arg_idx = idx;
    }
    name: Identifier;
    value_type: Type;
    arg_idx: number;
}

type Symbol = ValueSymbol | ArgSymbol | FunctionSymbol;

class SymbolLookupTable{
    symbols: Map<string, Symbol>;
    parent: SymbolLookupTable | null;
    constructor(parent: SymbolLookupTable | null){
        this.symbols = new Map();
        this.parent = parent;
    }

    add_symbol(s: Symbol){
        if(this.symbols.has(s.name.name)) throw "already added symbol";
        
        this.symbols.set(s.name.name, s);
    }

    get_symbol(i: Identifier) : Symbol | undefined {
        const symbol = this.symbols.get(i.name);
        if(!symbol && this.parent){
            return this.parent.get_symbol(i);
        } else {
            return symbol;
        }
    }
}

export function make_IRFunctions(parser_functions: ParserFunction[]): IRFunction[]{
    const lookup = new SymbolLookupTable(null);
    for(const func of parser_functions){
        lookup.add_symbol(new FunctionSymbol(func));
    }

    return parser_functions.map(func=>make_IRFunction(func, lookup));
}

function validate_function(func: ParserFunction){
    if(func.body.length == 0) throw "no return statment in function: " + func.name.name;
    for(const statement of func.body){
        const is_end = (statement == func.body[func.body.length -1]);
        const is_return = (statement instanceof ReturnStatement);
        if(is_end != is_return){
            throw "return statment not at end of function: " + func.name.name;
        }
    }
}

function make_IRFunction(func: ParserFunction, sym_lookup: SymbolLookupTable): IRFunction{
    validate_function(func);
    const lookup = new SymbolLookupTable(sym_lookup);
    func.args.forEach((arg,idx)=>{
        lookup.add_symbol(new ArgSymbol(arg, idx));
    });
    let expressions: SSA.Expression[] = [];
    const add_expression = (f: Expression): number=>{
        if(f instanceof BinaryOp){
            const left = add_expression(f.left);
            const op = f.op;
            const right = add_expression(f.right);
            expressions.push(new SSA.BinaryOp(expressions.length, left, right, op));
        } else if(f instanceof Constant){
            expressions.push(new SSA.Constant(expressions.length, f.val));
        } else if(f instanceof Identifier){
            const sym = lookup.get_symbol(f);
            if(!sym) {
                throw "can't find symbol: " + f.name;
            }
            
            if(sym instanceof ArgSymbol){
                expressions.push(new SSA.ArgIdentifier(expressions.length, sym.arg_idx));
            } else if(sym instanceof ValueSymbol){
                expressions.push(new SSA.LocalIdentifier(expressions.length, sym.ssa_index));
            } else {
                throw "unexpected symbol type, expected value";
            }
        } else if(f instanceof FunctionCall){
            expressions.push(new SSA.FunctionIdentifier(expressions.length, f.name, f.args.map(add_expression)));
        } else {
            throw "unexpected expression type";
        }
        return expressions.length - 1;
    }

    for(const statement of func.body){
        const idx = add_expression(statement.expr);
        if(statement instanceof LetStatment){
            lookup.add_symbol(new ValueSymbol(statement.identifier, idx));
        } else {
            
        }
    }

    return new IRFunction(func.name, func.args.map(a=>a.type), "i32", expressions);
}


export class IRFunction{
    constructor(public name: Identifier, public args: Type[], public return_type: Type, public SSA: SSA.Expression[]){};
}