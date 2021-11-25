import { BuiltinFunction } from "../codegen/decompile";
import * as Untyped from "../parse/expression";
import { Identifier, Type, Argument } from "../type";
import { Statement as UntypedStatement, LetStatment as UntypedLetStatement, ReturnStatement as UntypedReturnStatement} from "../parse/statment"
import { ParserFunction } from "../parse/statment";
import { Operation, make_binary_op, make_unary_op } from "./Operation";
import { InlineFunction } from "../codegen/inlineFunctions";

export class ValueIdentifier {
    constructor(public type: Type, public name: Identifier){};
}

export class Value {
    constructor(public type: Type, public name: Identifier){};
}

export class FunctionIdentifier {
    constructor(public type: Type, public name: Identifier, public args: Type[]){};
}

export class Constant {
    constructor(public type: Type, public val: number){};
}
    
export class BinaryOp {
    constructor(public type: Type, public left: Expression, public op: Operation, public right: Expression){}
}

export class UnaryOp {
    constructor(public type: Type, public expr: Expression, public op: Operation){}
}

export class FunctionCall {
    constructor(public type: Type, public name: Identifier, public args: Expression[]){};
}

export class IfExpression {
    constructor(public type: Type, public pred: Expression, public then_body: Statement[], public else_body: Statement[]){};
}

export class MapExpression {
    constructor(public type: Type, public generator: Expression, public lambda: LambdaCall){};
}

export class LambdaCall {
    constructor(public type: Type, public name: Identifier, public generator_args: Type[], public capture_args: Value[]){};
}

export type Expression = Constant | BinaryOp | UnaryOp | FunctionCall | Value | IfExpression | MapExpression;

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

function is_generator(expr: Expression) : boolean {
    return {
        "i32" : false,
        "f32" : false,
        "i64" : false,
        "f64" : false,
        "void": false,
        "bool" : false,
        "Point" : false,
        "Shape" : true,
        "IntRange" : true,
    }[expr.type];
}

function generated_types(expr: Expression) : Type[] {
    if(!is_generator(expr)) throw "not a generator";

    return {
        "Shape" : ["Point"],
        "IntRange" : ["i64"],
    }[expr.type as string] as Type[];
}

function collection_type(type: Type) : Type {
    if(type == "Point") return "Shape";
    else throw `No collection for type ${type}`;
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
    level: number;
    constructor(parent: IdentifierLookupTable | null){
        this.symbols = new Map();
        this.parent = parent;
        this.level = parent ? parent.level + 1 : 0;
    }

    add_symbol(s: ValueIdentifier | FunctionIdentifier){
        if(this.symbols.has(s.name.name)) throw `Error: symbol "${s.name.name}" redefined`;
        
        this.symbols.set(s.name.name, s);
    }

    get_symbol(i: Identifier) : Capture {
        const identifier = this.symbols.get(i.name);
        if(!identifier && this.parent){
            return this.parent.get_symbol(i);
        } else {
            return {sym: identifier, level: this.level};
        }
    }
}

type Capture = {sym: ValueIdentifier | FunctionIdentifier, level: number};

export class TypedProgram {
    public readonly funcs: Function[];
    private lambda_count: number = 0;
    constructor(funcs: ParserFunction[], builtins: BuiltinFunction[], inlines: InlineFunction[]){
        const lookup = new IdentifierLookupTable(null);
        for(const func of builtins){
            lookup.add_symbol(new FunctionIdentifier(func.type, func.name, func.args));
        }
        for(const func of inlines){
            lookup.add_symbol(new FunctionIdentifier(func.type, func.name, func.args));
        }
        for(const func of funcs){
            lookup.add_symbol(new FunctionIdentifier(func.return_type, func.name, func.args.map(arg=>arg.type)));
        }
        this.funcs = [];

        for(const func of funcs){
            this.funcs.push(this.make_typed_function(func, lookup).func);
        }
    }

    next_lambda_name(): string {
        return `__lambda${this.lambda_count++}`;
    }
    add_lambda_function(func: Function){
        this.funcs.push(func);
    }
    
    make_typed_expression(expr: Untyped.Expression, lookup: IdentifierLookupTable): {expr: Expression, captures: Capture[]}{
        if(expr instanceof Untyped.Constant){
            switch(expr.type){
                case "int":
                    return {expr: new Constant("i64", expr.val), captures: []};
                case "float":
                    return {expr: new Constant("f64", expr.val), captures: []};
            }
        } else if(expr instanceof Identifier) {
            const symbol = lookup.get_symbol(expr);
            if(!symbol) throw "symbol not found: " + expr.name;
            if(!(symbol.sym instanceof ValueIdentifier)) throw `symbol ${expr.name} is a ${symbol.sym} expected a ValueIdentifier`;
            return {expr: new Value(symbol.sym.type, expr), captures: [symbol]};

        } else if(expr instanceof Untyped.FunctionCall) {
            const capture = lookup.get_symbol(expr.name);
            const symbol = capture.sym;
            if(!symbol) throw "symbol not found: " + expr.name.name;
            if(!(symbol instanceof FunctionIdentifier)) throw `symbol ${expr.name} is a ${symbol} expected a "func"`;
            const args = expr.args.map(a=>this.make_typed_expression(a, lookup));

            if(args.length != symbol.args.length){
                throw `number of arguments to function "${expr.name.name}" don't match the function definition`;
            }

            for(let i = 0; i < args.length; i++){
                const func_type = symbol.args[i];
                const real_type = args[i].expr.type;
                if(func_type != real_type){
                    throw `argument of function "${expr.name.name}" at position ${i} has wrong type: Got "${real_type}" expected "${func_type}"`;
                }
            }

            return {expr:new FunctionCall(symbol.type, expr.name, args.map(a=>a.expr)), captures: args.flatMap(a=>a.captures)};

        } else if(expr instanceof Untyped.BinaryOp) {
            const left = this.make_typed_expression(expr.left, lookup);
            const right = this.make_typed_expression(expr.right, lookup);
            const op = make_binary_op(left.expr.type, expr.op, right.expr.type);

            return {expr:new BinaryOp(op.type, left.expr, op, right.expr), captures: [...left.captures, ...right.captures]};

        } else if(expr instanceof Untyped.IfExpression){
            const pred = this.make_typed_expression(expr.pred, lookup);
            const then_body = this.make_typed_body(expr.then_body, lookup);
            const else_body = this.make_typed_body(expr.else_body, lookup);
            const then_return = get_return_type(then_body.body);
            const else_return = get_return_type(else_body.body);

            if(pred.expr.type != "bool") throw `predicate to if statment has type ${pred.expr.type} expected type "bool"`
            if(then_return != else_return) throw `if expression type mismatch: ${then_return} != ${else_return}`

            return {expr: new IfExpression(then_return, pred.expr, then_body.body, else_body.body), captures: [...pred.captures, ...then_body.captures, ...else_body.captures]};
        } else if(expr instanceof Untyped.UnaryOp){
            const {expr: child_expr, captures} = this.make_typed_expression(expr.expr, lookup);
            const operation =  make_unary_op(child_expr.type, expr.op);

            return {expr: new UnaryOp(operation.type, child_expr, operation), captures: captures};

        } else if(expr instanceof Untyped.MapExpression){
            const {expr: generator, captures} = this.make_typed_expression(expr.expr, lookup);
            const {lambda, captures: lambda_captuers} = this.make_typed_lambda(generator, expr.func, lookup);
            return {expr: new MapExpression(collection_type(lambda.type), generator, lambda), captures: [...captures, ...lambda_captuers]};
        } else {
            throw "unexpected expression type";
        }
    }

    make_typed_statement(statement: UntypedStatement, lookup: IdentifierLookupTable) : {statement: Statement, captures: Capture[]}{
        if(statement instanceof UntypedLetStatement){
            const {expr, captures} = this.make_typed_expression(statement.expr, lookup);
            const id = new ValueIdentifier(expr.type, statement.name);
            lookup.add_symbol(id);
            return {statement: new LetStatement(id, expr), captures: captures};
        } else if(statement instanceof UntypedReturnStatement){
            const {expr, captures} = this.make_typed_expression(statement.expr, lookup);
            return {statement: new ReturnStatement(expr), captures: captures};
        } else {
            throw "unexpected statement type";
        }
    }

    make_typed_body(statements: UntypedStatement[], lookup: IdentifierLookupTable): {body: Statement[], captures: Capture[]} {
        let scoped_lookup = new IdentifierLookupTable(lookup);
        let typed_statements = statements.map(s=>this.make_typed_statement(s, scoped_lookup));

        return {body: typed_statements.map(s=>s.statement), captures: typed_statements.flatMap(s=>s.captures)};
    }

    make_typed_lambda(generator: Expression, lambda: Untyped.Lambda, lookup: IdentifierLookupTable) : {lambda: LambdaCall, captures: Capture[]} {
        const arg_types = generated_types(generator);

        if(arg_types.length != lambda.args.length) throw "Error: lambda argument count doesn't match generator type count";

        let args = [];
        for(let i = 0; i < lambda.args.length; i++){
            args.push(new ValueIdentifier(arg_types[i], lambda.args[i]));
        }

        const scoped_lookup = new IdentifierLookupTable(lookup);
        
        for(const arg of args){
            scoped_lookup.add_symbol(new ValueIdentifier(arg.type, arg.name));
        }

        const {body, captures} = this.make_typed_body(lambda.body, scoped_lookup);

        let external_captures: Map<string, ValueIdentifier> = new Map();

        for(const capture of captures){
            //captured in the above function body
            if(capture.level < scoped_lookup.level && capture.level != 0){
                if(capture.sym instanceof FunctionIdentifier) throw "Error: Function identifier captured";
                external_captures.set(capture.sym.name.name, capture.sym);
            }
        }

        const hidden_args = [...external_captures].map(cap=>new Value(cap[1].type, new Identifier(cap[0])));

        const full_args = [...hidden_args, ...args];
        let func = new Function(new Identifier(this.next_lambda_name()), full_args, get_return_type(body), body);
        this.add_lambda_function(func);

        return {lambda: new LambdaCall(func.type, func.name, arg_types, hidden_args), captures: captures};
    }

    make_typed_function(func: ParserFunction, func_lookup: IdentifierLookupTable): {func: Function, captures: Capture[]} {
        const name = func.name;
        const args = func.args;
        const type = func.return_type;
        const lookup = new IdentifierLookupTable(func_lookup);
        for(const arg of func.args){
            lookup.add_symbol(new ValueIdentifier(arg.type, arg.name));
        }
        const {body, captures} = this.make_typed_body(func.body, lookup);
        const body_type = get_return_type(body);
        if(type != body_type) throw `Type mismatch, return type "${type}" not equalt to body's return type "${body_type}"`
        return {func: new Function(name, args, type, body), captures};
    }

}