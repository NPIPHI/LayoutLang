import * as antlr from "antlr4"

export interface ParserContext extends antlr.ParserRuleContext {
    children: ParserContext[] | null;
}