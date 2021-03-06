import { ParserContext } from "./parserContext";
import { ParserFunction, parse_statement, Statement } from "./statment";
import { Identifier, Argument } from "../type";
import LayoutLangParser  from "./parse/LayoutLangParser";
import { CommonToken } from "antlr4";
export class Constant{
    constructor(public val: number, public type: "int" | "float"){}
}
export type Operation = "|" | "*" | "/" | "+" | "-" | "%" | "<" | ">" | "<=" | ">=" | "&&" | "||" | "==" | "!=";
export namespace OP {
    export const operations = ["|", "*", "/", "+", "-", "%", "<", ">", "<=", ">=", "&&", "||","==", "!="];
    export function from(str: string): Operation {
        if(!operations.find(s=>s==str)){
            throw `operation ${str} not recognized`;
        }
        return str as Operation;
    }
}

export class BinaryOp {
    constructor(public left: Expression, public op: Operation, public right: Expression){}
}

export class UnaryOp {
    constructor(public expr: Expression, public op: Operation){};
}

export class FunctionCall{
    constructor(public name: Identifier, public args: Expression[]){};
}

export class IfExpression{
    constructor(public pred: Expression, public then_body: Statement[], public else_body: Statement[]){};
}

export class MapExpression {
    constructor(public expr: Expression, public func: Lambda){};
}

export class Lambda {
    constructor(public args: Identifier[], public body: Statement[]){};
}

export type Expression = UnaryOp | BinaryOp | Constant | Identifier | FunctionCall | IfExpression | MapExpression;

function parse_arg(ctx: any){
    return new Argument(new Identifier(ctx.name.text), ctx.type_decl.getText());
}
function parse_body(ctx: LayoutLangParser): Statement[]{
    if(!(ctx instanceof LayoutLangParser.FuncBodyContext)) throw "Expected FunctionBody";
    return ctx.statements.map(parse_statement);
}
function parse_args(ctx: LayoutLangParser): Argument[] {
    if(!(ctx instanceof LayoutLangParser.ArgsContext)) throw "Expected Args";
    return ctx.argList.map(parse_arg);
}
export function parse_function(ctx: LayoutLangParser): ParserFunction{
    if(!(ctx instanceof LayoutLangParser.FuncContext)) throw "Expected FunctionContext";
    if(!ctx.type_decl) throw "missing type declaration"
    return new ParserFunction(new Identifier(ctx.name.text), parse_args(ctx.arguments) , ctx.type_decl.getText(), parse_body(ctx.func_body));
}

function parse_lambda(ctx: ParserContext): Lambda {
    if(!(ctx instanceof LayoutLangParser.LambdaContext)) throw "Expected lambda";

    const arg_list = ctx.argsList.idenList;
    const args = arg_list ? arg_list.map((arg: CommonToken)=>new Identifier(arg.text)) : [];

    const body = parse_body(ctx.func_body);

    return new Lambda(args, body);
}


export function parse_expression(ctx: ParserContext): Expression {
    if(ctx instanceof LayoutLangParser.IntegerContext){
        return new Constant(parseInt(ctx.getText()), "int");
    } else if(ctx instanceof LayoutLangParser.FloatValContext){
        return new Constant(parseFloat(ctx.getText()), "float");
    } else if(ctx instanceof LayoutLangParser.IdentifierContext){
        return new Identifier(ctx.getText());
    } else if(ctx instanceof LayoutLangParser.ParenExprContext){
        return parse_expression(ctx.children[1]);
    } else if(ctx instanceof LayoutLangParser.FuncCallContext){
        return new FunctionCall(new Identifier(ctx.name.text), ctx.argList.argList.map(parse_expression));
    } else if(ctx instanceof LayoutLangParser.IfExprContext){
        return new IfExpression(parse_expression(ctx.pred), parse_body(ctx.then_body), parse_body(ctx.else_body));
    } else if(ctx instanceof LayoutLangParser.LambdaContext){
    } else if(ctx instanceof LayoutLangParser.ExprContext){
        if(!ctx.children) throw `Error: parse error at "${ctx.parentCtx.getText()}", line: ${ctx.start.line}, column: ${ctx.start.column}`
        if(ctx.children.length == 3){
            if(ctx.children[2] instanceof LayoutLangParser.LambdaContext){
                const expr = parse_expression(ctx.children[0]);
                const lambda = parse_lambda(ctx.children[2]);
                
                return new MapExpression(expr, lambda);
            } else {
                const left = parse_expression(ctx.children[0]);
                const op = OP.from(ctx.children[1].getText());
                const right = parse_expression(ctx.children[2]);
                return new BinaryOp(left, op, right);
            }
        } else if(ctx.children.length == 2){
            const expr = parse_expression(ctx.children[1]);
            const op = ctx.children[0].getText();
            return new UnaryOp(expr, OP.from(ctx.children[0].getText()));
        } else if(ctx.children.length == 1) {
            return parse_expression(ctx.children[0]);
        } else {
            throw "unexpected number of children";
        }
    } else {
        throw "unrecognized expression form";
    }
}


