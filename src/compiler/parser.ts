import { Function } from "./codegen"
import * as antlr from 'antlr4';
import LayoutLangLexer from "./parse/LayoutLangLexer";
import LayoutLangParser from "./parse/LayoutLangParser";

export class Parser {
    public parse(input: string): Function[] { 
        const chars = new antlr.InputStream(input);
        const lexer = new LayoutLangLexer(chars) as any;
        const tokens = new antlr.CommonTokenStream(lexer);
        const parser = new LayoutLangParser(tokens) as any;
        parser.buildParseTrees = true;
        const tree = parser.body();

        tree.accept(this);
        return [];
    }

    private make_function(ctx: antlr.ParserRuleContext){
        ctx.getChild
    }

    private visitChildren(ctx: antlr.ParserRuleContext){
        // if(ctx instanceof FuncContext)
        let a = 0;
    }
}