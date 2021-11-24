import * as antlr from 'antlr4';
import LayoutLangLexer from "./parse/LayoutLangLexer";
import LayoutLangParser from "./parse/LayoutLangParser";
import {parse_function} from "./expression"
import {ParserFunction} from "./statment"

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

        return tree.functions.map(parse_function);
    }
}