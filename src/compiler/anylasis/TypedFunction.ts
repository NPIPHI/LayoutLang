import { BuiltinFunction } from "../codegen/decompile";
import * as Untyped from "../parse/expression";
import { Identifier, Type, Argument } from "../type";
import { Statement as UntypedStatement, LetStatment as UntypedLetStatement, ReturnStatement as UntypedReturnStatement} from "../parse/statment"
import { ParserFunction } from "../parse/statment";
import { Operation, make_binary_op } from "./Operation";

export class ValueIdentifier {
    constructor(public type: Type, public name: Identifier){};
}

export class Value {
    constructor(public type: Type, public name: Identifier){};
}

export class FunctionIdentifier {
    constructor(public type: Type, public name: Identifier, public args: Type[]){};
}

export class IntConstant {
    constructor(public type: Type, public val: number){};
}
    
export class BinaryOp {
    constructor(public type: Type, public left: Expression, public op: Operation, public right: Expression){}
}

export class FunctionCall {
    constructor(public type: Type, public name: Identifier, public args: Expression[]){};
}

export class IfExpression {
    constructor(public type: Type, public pred: Expression, public then_body: Statement[], public else_body: Statement[]){};
}

export type Expression = IntConstant | BinaryOp | FunctionCall | Value | IfExpression;

export class LetStatement{
    constructor(public name: ValueIdentifier, public expr: Expression){};
}

export class ReturnStatement{
    constructor(public expr: Expression){};
}

export type Statement = LetStatement | ReturnStatement;

export class Function{
    constructor(public name: Identifier, public args: Argument[], public type: Type, public body: Statement[]){}
}

function get_return_type(statements: Statement[]){
    if(statements.length == 0) throw "no return statment"
    for(const statement of statements){
        const is_end = (statement == statements[statements.length -1]);
        const is_return = (statement instanceof ReturnStatement);
        if(is_end != is_return){
            throw "return statment not at end of function";
        }
    }

    return statements[statements.length - 1].expr.type;
}

class IdentifierLookupTable{
    symbols: Map<string, ValueIdentifier | FunctionIdentifier>;
    parent: IdentifierLookupTable | null;
    constructor(parent: IdentifierLookupTable | null){
        this.symbols = new Map();
        this.parent = parent;
    }

    add_symbol(s: ValueIdentifier | FunctionIdentifier){
        if(this.symbols.has(s.name.name)) throw `Error: symbol "${s.name.name}" redefined`;
        
        this.symbols.set(s.name.name, s);
    }

    get_symbol(i: Identifier) : ValueIdentifier | FunctionIdentifier | undefined {
        const identifier = this.symbols.get(i.name);
        if(!identifier && this.parent){
            return this.parent.get_symbol(i);
        } else {
            return identifier;
        }
    }
}


function make_typed_expression(expr: Untyped.Expression, lookup: IdentifierLookupTable): Expression{
    if(expr instanceof Untyped.Constant){
        return new IntConstant("i32", expr.val);
    } else if(expr instanceof Identifier) {
        const symbol = lookup.get_symbol(expr);
        if(!symbol) throw "symbol not found: " + expr.name;
        if(!(symbol instanceof ValueIdentifier)) throw `symbol ${expr.name} is a ${symbol} expected a ValueIdentifier`;
        return new Value(symbol.type, expr);

    } else if(expr instanceof Untyped.FunctionCall) {
        const symbol = lookup.get_symbol(expr.name);
        if(!symbol) throw "symbol not found: " + expr.name.name;
        if(!(symbol instanceof FunctionIdentifier)) throw `symbol ${expr.name} is a ${symbol} expected a "func"`;
        const args = expr.args.map(a=>make_typed_expression(a, lookup))

        if(args.length != symbol.args.length){
            throw `number of arguments to function "${expr.name.name}" don't match the function definition`;
        }

        for(let i = 0; i < args.length; i++){
            const func_type = symbol.args[i];
            const real_type = args[i].type;
            if(func_type != real_type){
                throw `argument of function "${expr.name.name}" at position ${i} has wrong type: Got "${real_type}" expected "${func_type}"`;
            }
        }

        return new FunctionCall(symbol.type, expr.name, args);

    } else if(expr instanceof Untyped.BinaryOp) {
        const left = make_typed_expression(expr.left, lookup);
        const right = make_typed_expression(expr.right, lookup);
        const op = make_binary_op(left.type, expr.op, right.type);

        return new BinaryOp(op.type, left, op, right);

    } else if(expr instanceof Untyped.IfExpression){
        const pred = make_typed_expression(expr.pred, lookup);
        const then_body = make_typed_body(expr.then_body, lookup);
        const else_body = make_typed_body(expr.else_body, lookup);
        const then_return = get_return_type(then_body);
        const else_return = get_return_type(else_body);

        if(pred.type != "bool") throw `predicate to if statment has type ${pred.type} expected type "bool"`
        if(then_return != else_return) throw `if expression type mismatch: ${then_return} != ${else_return}`

        return new IfExpression(then_return, pred, then_body, else_body);
    } else {
        throw "unexpected expression type";
    }
}



function make_typed_statement(statement: UntypedStatement, lookup: IdentifierLookupTable){
    if(statement instanceof UntypedLetStatement){
        const expr = make_typed_expression(statement.expr, lookup);
        const id = new ValueIdentifier(expr.type, statement.name);
        lookup.add_symbol(id);
        return new LetStatement(id, expr);
    } else if(statement instanceof UntypedReturnStatement){
        return new ReturnStatement(make_typed_expression(statement.expr, lookup));
    } else {
        throw "unexpected statement type";
    }
}

function make_typed_body(statements: UntypedStatement[], lookup: IdentifierLookupTable): Statement[]{
    let scoped_lookup = new IdentifierLookupTable(lookup);
    return statements.map(s=>make_typed_statement(s, scoped_lookup));
}

function make_typed_function(func: ParserFunction, func_lookup: IdentifierLookupTable): Function{
    const name = func.name;
    const args = func.args;
    const type = func.return_type;
    const lookup = new IdentifierLookupTable(func_lookup);
    for(const arg of func.args){
        lookup.add_symbol(new ValueIdentifier(arg.type, arg.name));
    }
    const body = make_typed_body(func.body, lookup);
    const body_type = get_return_type(body);
    if(type != body_type) throw `Type mismatch, return type "${type}" not equalt to body's return type "${body_type}"`
    return new Function(name, args, type, body);
}

export class TypedProgram {
    public readonly funcs: Function[];
    public readonly func_map: Map<string, Function>;


    constructor(funcs: ParserFunction[], builtins: BuiltinFunction[]){
        let lookup = new IdentifierLookupTable(null);
        for(const func of builtins){
            lookup.add_symbol(new FunctionIdentifier(func.type, func.name, func.args));
        }
        for(const func of funcs){
            lookup.add_symbol(new FunctionIdentifier(func.return_type, func.name, func.args.map(arg=>arg.type)));
        }

        this.funcs = funcs.map(f=>make_typed_function(f, lookup));
        this.func_map = new Map<string, Function>();
        for(const func of this.funcs){
            this.func_map.set(func.name.name, func);
        }
    }
}