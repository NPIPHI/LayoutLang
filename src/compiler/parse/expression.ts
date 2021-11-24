import { ParserContext } from "./parserContext";
import { ParserFunction, parse_statement, Statement } from "./statment";
import { Identifier, Argument } from "../type";
import LayoutLangParser  from "./parse/LayoutLangParser";
export class Constant{
    constructor(public val: number){}
}
export type Operation = "*" | "/" | "+" | "-" | "%" | "<" | ">" | "<=" | ">=" | "&&" | "||" | "==" | "!=";
export namespace OP {
    export const operations = ["*", "/", "+", "-", "%", "<", ">", "<=", ">=", "&&", "||","==", "!="];
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

export class FunctionCall{
    constructor(public name: Identifier, public args: Expression[]){};
}

export class IfExpression{
    constructor(public pred: Expression, public then_body: Statement[], public else_body: Statement[]){};
}

export type Expression = BinaryOp | Constant | Identifier | FunctionCall | IfExpression;

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


export function parse_expression(ctx: ParserContext): Expression {
    if(ctx instanceof LayoutLangParser.IntegerContext){
        return new Constant(parseInt(ctx.getText()));
    } else if(ctx instanceof LayoutLangParser.IdentifierContext){
        return new Identifier(ctx.getText());
    } else if(ctx instanceof LayoutLangParser.ParenExprContext){
        return parse_expression(ctx.children[1]);
    } else if(ctx instanceof LayoutLangParser.FuncCallContext){
        return new FunctionCall(new Identifier(ctx.name.text), ctx.argList.argList.map(parse_expression));
    } else if(ctx instanceof LayoutLangParser.IfExprContext){
        return new IfExpression(parse_expression(ctx.pred), parse_body(ctx.then_body), parse_body(ctx.else_body));
    } else if(ctx instanceof LayoutLangParser.ExprContext){
        if(!ctx.children) throw `Error: parse error at "${ctx.parentCtx.getText()}", line: ${ctx.start.line}, column: ${ctx.start.column}`
        if(ctx.children.length == 3){
            const left = parse_expression(ctx.children[0]);
            const op = OP.from(ctx.children[1].getText());
            const right = parse_expression(ctx.children[2]);
            return new BinaryOp(left, op, right);
        } else {
            return parse_expression(ctx.children[0]);
        }
    } else {
        throw "unrecognized expression form";
    }
}


