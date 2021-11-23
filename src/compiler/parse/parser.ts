import { WasmFunction } from "../codegen/codegen"
import * as antlr from 'antlr4';
import LayoutLangLexer from "./parse/LayoutLangLexer";
import LayoutLangParser, * as contexts from "./parse/LayoutLangParser";
import {Expression, Identifier} from "./expression"
import {Statement, parse_statement, Argument, ParserFunction} from "./statment"
import {ParserContext} from "./parserContext"

class FunctionParser {
    func: ParserFunction;
    parse_arg(ctx: ParserContext){
        const [name, colon, type] = ctx.children.map(c=>c.getText());
        return new Argument(new Identifier(name), type);
    }
    parse_body(ctx: ParserContext): Statement[]{
        if(!(ctx instanceof contexts.FuncBodyContext)) throw "Expected FunctionBody";
        return ctx.children.map(c=>parse_statement(c));
    }
    parse_args(ctx: ParserContext): Argument[] {
        if(!(ctx instanceof contexts.ArgsContext)) throw "Expected Args";
        return ctx.children.map(c=>this.parse_arg(c));
    }
    visitChildren(ctx: ParserContext){
        if(!(ctx instanceof contexts.FuncContext)) throw "Expected FunctionContext";
        const [_0, name, _1, args, _2, _3, type, _4, body, _5] = ctx.children;
        this.func = new ParserFunction(new Identifier(name.getText()), this.parse_args(args) , type.getText(), this.parse_body(body));
    }
}

export class Parser {
    funcs: ParserFunction[];
    public parse(input: string): ParserFunction[] { 
        this.funcs = [];

        const chars = new antlr.InputStream(input);
        const lexer = new LayoutLangLexer(chars) as any;
        const tokens = new antlr.CommonTokenStream(lexer);
        const parser = new LayoutLangParser(tokens) as any;
        parser.buildParseTrees = true;
        const tree = parser.body();

        tree.accept(this);
        return this.funcs;
    }

    private make_function(ctx: ParserContext){
        const function_parser = new FunctionParser();
        ctx.accept(function_parser as any);
        return function_parser.func;
    }

    private visitChildren(ctx: ParserContext){
        if(!ctx || !ctx.children) throw "bad parse";

        if(ctx instanceof contexts.BodyContext){
            this.funcs = ctx.children.map(c=>this.make_function(c));
        } else {
            throw "unexpected token";
        }
    }
}