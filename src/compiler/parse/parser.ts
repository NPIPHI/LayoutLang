import { WasmFunction } from "../codegen/codegen"
import * as antlr from 'antlr4';
import LayoutLangLexer from "./parse/LayoutLangLexer";
import LayoutLangParser, * as contexts from "./parse/LayoutLangParser";
import {Expression, Identifier} from "./expression"
import {Statement, parse_statement, Argument, ParserFunction} from "./statment"

class FunctionParser {
    func: ParserFunction;
    parse_arg(ctx: contexts.ArgContext){
        return new Argument(new Identifier(ctx.name.text), ctx.type_decl.getText());
    }
    parse_body(ctx: contexts.BodyContext): Statement[]{
        if(!(ctx instanceof contexts.FuncBodyContext)) throw "Expected FunctionBody";
        return ctx.statements.map(c=>parse_statement(c));
    }
    parse_args(ctx: contexts.ArgsContext): Argument[] {
        if(!(ctx instanceof contexts.ArgsContext)) throw "Expected Args";
        return ctx.argList.map(c=>this.parse_arg(c));
    }
    visitChildren(ctx: contexts.FuncContext){
        if(!(ctx instanceof contexts.FuncContext)) throw "Expected FunctionContext";
        this.func = new ParserFunction(new Identifier(ctx.name.text), this.parse_args(ctx.arguments) , ctx.type_decl.getText(), this.parse_body(ctx.func_body));
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

    private make_function(ctx: contexts.FuncContext){
        const function_parser = new FunctionParser();
        function_parser.visitChildren(ctx);
        return function_parser.func;
    }

    private visitChildren(ctx: contexts.BodyContext){
        this.funcs = ctx.functions.map(c=>this.make_function(c));
    }
}