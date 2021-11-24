import { Identifier } from "../type";
import { Function, Expression, BinaryOp, UnaryOp,FunctionCall, Constant, Value, IfExpression, Statement, LetStatement} from "./TypedFunction";
import { Type, Argument } from "../type";
import * as SSA from "./SSA"
import { get_primitive_type } from "../codegen/primitiveTypes";

// export class WasmFunction{
//     constructor(public name: Identifier, public args: Argument[], public type: Type, public code: Uint8Array){}
// }

class FunctionSymbol{
    constructor(func: Function){
        this.name = func.name;
        this.args = func.args;
        this.return_type = func.type;
    }
    name: Identifier;
    args: Argument[];
    return_type: Type;
}

class ValueSymbol{
    constructor(public name: Identifier, public ssa_index: number, public type: Type){}
}

class ArgSymbol{  
    constructor(arg: Argument, idx: number){
        this.name = arg.name;
        this.type = arg.type;
        this.arg_idx = idx;
    }
    name: Identifier;
    type: Type;
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

export function make_IRFunctions(parser_functions: Function[]): IRFunction[]{
    const lookup = new SymbolLookupTable(null);
    for(const func of parser_functions){
        lookup.add_symbol(new FunctionSymbol(func));
    }

    return parser_functions.map(func=>make_IRFunction(func, lookup));
}

function make_ir(expressions: SSA.Expression[], expr: Expression, sym_lookup: SymbolLookupTable){
    if(expr instanceof BinaryOp){
        const left = make_ir(expressions, expr.left, sym_lookup);
        const op = expr.op;
        const right = make_ir(expressions, expr.right, sym_lookup);
        expressions.push(new SSA.Operation(expressions.length, [left, right], expr.op, get_primitive_type(op.type)));
    } else if(expr instanceof UnaryOp){
        const e = make_ir(expressions, expr.expr, sym_lookup);
        expressions.push(new SSA.Operation(expressions.length, [e], expr.op, get_primitive_type(expr.op.type)))

    } else if(expr instanceof Constant){
        expressions.push(new SSA.Constant(expressions.length, expr.val, get_primitive_type(expr.type)));

    } else if(expr instanceof Value){
        const sym = sym_lookup.get_symbol(expr.name);
        if(!sym) {
            throw "can't find symbol: " + expr.name;
        }
        
        if(sym instanceof ArgSymbol){
            expressions.push(new SSA.ArgIdentifier(expressions.length, sym.arg_idx, get_primitive_type(sym.type)));
        } else if(sym instanceof ValueSymbol){
            expressions.push(new SSA.LocalIdentifier(expressions.length, sym.ssa_index, get_primitive_type(sym.type)));
        } else {
            throw "unexpected symbol type, expected value";
        }
    } else if(expr instanceof FunctionCall){
        const args = expr.args.map(a=>make_ir(expressions, a, sym_lookup));
        expressions.push(new SSA.FunctionIdentifier(expressions.length, expr.name, args, get_primitive_type(expr.type)));
    } else if(expr instanceof IfExpression){
        const pred_idx = make_ir(expressions, expr.pred, sym_lookup);
        const then_idx = make_IrBody(expressions, expr.then_body, sym_lookup);
        const else_idx = make_IrBody(expressions, expr.else_body, sym_lookup);
        expressions.push(new SSA.IfBranch(expressions.length, pred_idx, then_idx, else_idx, get_primitive_type(expr.type)));
    } else {
        throw "unexpected expression type";
    }
    return expressions.length - 1;
}

function make_IrBody(expressions: SSA.Expression[], statements: Statement[], sym_lookup: SymbolLookupTable): number{
    const scoped_lookup = new SymbolLookupTable(sym_lookup);
    let idx = 0;
    statements.forEach(s=>{
        idx = make_ir(expressions, s.expr, scoped_lookup);
        if(s instanceof LetStatement){
            scoped_lookup.add_symbol(new ValueSymbol(s.name.name, idx, s.expr.type));
        }
    });

    return idx;
}

function make_IRFunction(func: Function, sym_lookup: SymbolLookupTable): IRFunction{
    const lookup = new SymbolLookupTable(sym_lookup);
    func.args.forEach((arg,idx)=>{
        lookup.add_symbol(new ArgSymbol(arg, idx));
    });
    let expressions: SSA.Expression[] = [];

    make_IrBody(expressions, func.body, lookup);

    return new IRFunction(func.name, func.args.map(a=>a.type), func.type, expressions);
}


export class IRFunction{
    constructor(public name: Identifier, public args: Type[], public return_type: Type, public SSA: SSA.Expression[]){};
}