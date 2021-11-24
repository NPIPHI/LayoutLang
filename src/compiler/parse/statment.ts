import { Expression, parse_expression} from "./expression";
import { Identifier, Argument, Type } from "../type";
import LayoutLangParser from "./parse/LayoutLangParser"

export class ReturnStatement {
    constructor(public expr: Expression){}
}

export class LetStatment {
    constructor(public name: Identifier, public expr: Expression){}
}

export type Statement = ReturnStatement | LetStatment;

export class ParserFunction {
    constructor(public name: Identifier, public args: Argument[], public return_type: Type, public body: Statement[]){}
}

function parse_let_statement(ctx: LayoutLangParser): LetStatment{
    const [_1, name, _2, expr, _3] = (ctx as any).children;
    if(!name) throw "no identifier in let statement";
    if(!expr) throw "no expreession in let statement";
    return new LetStatment(new Identifier(name.getText()), parse_expression(expr));
}
function parse_return_statement(ctx: LayoutLangParser): ReturnStatement{
    const [_1, expr, _2] = (ctx as any).children;
    if(!expr) throw "no expreession in return statement";
    return new ReturnStatement(parse_expression(expr));
}

export function parse_statement(ctx: LayoutLangParser): Statement {
    if(!(ctx instanceof LayoutLangParser.StatementContext)) throw "Expected Statment";

    let statement = (ctx as any).children[0];

    if(statement instanceof LayoutLangParser.ReturnStatementContext){
        return parse_return_statement(statement as any);
    } else if(statement instanceof LayoutLangParser.LetStatementContext){
        return parse_let_statement(statement as any);
    }

    throw "unrecognized statement";
}
