import { BinaryopContext, ExprContext, FuncCallContext, IdentifierContext, IntegerContext, ParenExprContext } from "./parse/LayoutLangParser";
import { ParserContext } from "./parserContext";

export class Constant{
    constructor(public val: number){}
}
export namespace OP {
    export const PLUS = 0;
    export const MINUS = 1;
    export const TIMES = 2;
    export const DIVIDE = 3;
    export function from(str: string): Operation {
        return {
            "+": PLUS,
            "-": MINUS,
            "*": TIMES,
            "/": DIVIDE
        }[str] as Operation
    }
}

export class BinaryOp {
    constructor(public left: Expression, public op: Operation, public right: Expression){}
}

export type Operation = 0 | 1 | 2 | 3;
export class Identifier{
    constructor(public name: string){};
}

export class FunctionCall{
    constructor(public name: Identifier, public args: Expression[]){};
}
export type Expression = BinaryOp | Constant | Identifier | FunctionCall;

export function parse_expression(ctx: ParserContext): Expression {
    if(ctx instanceof IntegerContext){
        return new Constant(parseInt(ctx.getText()));
    } else if(ctx instanceof IdentifierContext){
        return new Identifier(ctx.getText());
    } else if(ctx instanceof ParenExprContext){
        return parse_expression(ctx.children[1]);
    } else if(ctx instanceof FuncCallContext){
        return new FunctionCall(new Identifier(ctx.name.text), ctx.argList.map(parse_expression));
    } else if(ctx instanceof ExprContext){
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


