import {Expression, Identifier, parse_expression} from "./expression";
import { ParserContext } from "./parserContext";
import * as contexts from "./parse/LayoutLangParser"

export type Type = string;

export class ReturnStatement {
    constructor(public expr: Expression){}
}

export class LetStatment {
    constructor(public identifier: Identifier, public expr: Expression){}
}

export type Statement = ReturnStatement | LetStatment;

export class ParserFunction {
    constructor(public name: Identifier, public args: Argument[], public return_type: Type, public body: Statement[]){}
}

export class Argument {
    constructor(public identifier: Identifier, public type: Type){}
}

function parse_let_statement(ctx: contexts.LetStatementContext): LetStatment{
    const [_1, name, _2, expr, _3] = (ctx as any).children;
    return new LetStatment(new Identifier(name.getText()), parse_expression(expr));
}
function parse_return_statement(ctx: contexts.ReturnStatementContext): ReturnStatement{
    const [_1, expr, _2] = (ctx as any).children;
    return new ReturnStatement(parse_expression(expr));
}

export function parse_statement(ctx: ParserContext): Statement {
    if(!(ctx instanceof contexts.StatementContext)) throw "Expected Statment";

    let statement = ctx.children[0];

    if(statement instanceof contexts.ReturnStatementContext){
        return parse_return_statement(statement);
    } else if(statement instanceof contexts.LetStatementContext){
        return parse_let_statement(statement);
    }

    throw "unrecognized statement";
}
