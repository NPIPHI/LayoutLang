// Generated from LayoutLang.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0014y\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "b\n\u0010\u0003\u0011\u0005\u0011e\n\u0011\u0003\u0011\u0006\u0011h",
    "\n\u0011\r\u0011\u000e\u0011i\u0003\u0012\u0003\u0012\u0007\u0012n\n",
    "\u0012\f\u0012\u000e\u0012q\u000b\u0012\u0003\u0013\u0006\u0013t\n\u0013",
    "\r\u0013\u000e\u0013u\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\u0003\u0002\b\b\u0002\'\',-//11>>@@\u0003",
    "\u0002//\u0003\u00022;\u0004\u0002C\\c|\u0006\u00022;C\\aac|\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002\u0084\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0003\'\u0003\u0002\u0002\u0002\u0005*\u0003",
    "\u0002\u0002\u0002\u0007,\u0003\u0002\u0002\u0002\t.\u0003\u0002\u0002",
    "\u0002\u000b1\u0003\u0002\u0002\u0002\r3\u0003\u0002\u0002\u0002\u000f",
    "5\u0003\u0002\u0002\u0002\u0011<\u0003\u0002\u0002\u0002\u0013>\u0003",
    "\u0002\u0002\u0002\u0015B\u0003\u0002\u0002\u0002\u0017D\u0003\u0002",
    "\u0002\u0002\u0019F\u0003\u0002\u0002\u0002\u001bH\u0003\u0002\u0002",
    "\u0002\u001dK\u0003\u0002\u0002\u0002\u001fa\u0003\u0002\u0002\u0002",
    "!d\u0003\u0002\u0002\u0002#k\u0003\u0002\u0002\u0002%s\u0003\u0002\u0002",
    "\u0002\'(\u0007h\u0002\u0002()\u0007p\u0002\u0002)\u0004\u0003\u0002",
    "\u0002\u0002*+\u0007*\u0002\u0002+\u0006\u0003\u0002\u0002\u0002,-\u0007",
    "+\u0002\u0002-\b\u0003\u0002\u0002\u0002./\u0007/\u0002\u0002/0\u0007",
    "@\u0002\u00020\n\u0003\u0002\u0002\u000212\u0007}\u0002\u00022\f\u0003",
    "\u0002\u0002\u000234\u0007\u007f\u0002\u00024\u000e\u0003\u0002\u0002",
    "\u000256\u0007t\u0002\u000267\u0007g\u0002\u000278\u0007v\u0002\u0002",
    "89\u0007w\u0002\u00029:\u0007t\u0002\u0002:;\u0007p\u0002\u0002;\u0010",
    "\u0003\u0002\u0002\u0002<=\u0007=\u0002\u0002=\u0012\u0003\u0002\u0002",
    "\u0002>?\u0007n\u0002\u0002?@\u0007g\u0002\u0002@A\u0007v\u0002\u0002",
    "A\u0014\u0003\u0002\u0002\u0002BC\u0007?\u0002\u0002C\u0016\u0003\u0002",
    "\u0002\u0002DE\u0007.\u0002\u0002E\u0018\u0003\u0002\u0002\u0002FG\u0007",
    "<\u0002\u0002G\u001a\u0003\u0002\u0002\u0002HI\u0007k\u0002\u0002IJ",
    "\u0007h\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KL\u0007g\u0002\u0002",
    "LM\u0007n\u0002\u0002MN\u0007u\u0002\u0002NO\u0007g\u0002\u0002O\u001e",
    "\u0003\u0002\u0002\u0002Pb\t\u0002\u0002\u0002QR\u0007@\u0002\u0002",
    "Rb\u0007?\u0002\u0002ST\u0007>\u0002\u0002Tb\u0007?\u0002\u0002UV\u0007",
    "~\u0002\u0002Vb\u0007~\u0002\u0002WX\u0007(\u0002\u0002Xb\u0007(\u0002",
    "\u0002YZ\u0007?\u0002\u0002Zb\u0007?\u0002\u0002[\\\u0007#\u0002\u0002",
    "\\b\u0007?\u0002\u0002]^\u0007>\u0002\u0002^b\u0007>\u0002\u0002_`\u0007",
    "@\u0002\u0002`b\u0007@\u0002\u0002aP\u0003\u0002\u0002\u0002aQ\u0003",
    "\u0002\u0002\u0002aS\u0003\u0002\u0002\u0002aU\u0003\u0002\u0002\u0002",
    "aW\u0003\u0002\u0002\u0002aY\u0003\u0002\u0002\u0002a[\u0003\u0002\u0002",
    "\u0002a]\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002b \u0003\u0002",
    "\u0002\u0002ce\t\u0003\u0002\u0002dc\u0003\u0002\u0002\u0002de\u0003",
    "\u0002\u0002\u0002eg\u0003\u0002\u0002\u0002fh\t\u0004\u0002\u0002g",
    "f\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002",
    "\u0002ij\u0003\u0002\u0002\u0002j\"\u0003\u0002\u0002\u0002ko\t\u0005",
    "\u0002\u0002ln\t\u0006\u0002\u0002ml\u0003\u0002\u0002\u0002nq\u0003",
    "\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002",
    "p$\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rt\t\u0007\u0002",
    "\u0002sr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002us\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\b",
    "\u0013\u0002\u0002x&\u0003\u0002\u0002\u0002\b\u0002adiou\u0003\b\u0002",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LayoutLangLexer extends antlr4.Lexer {

    static grammarFileName = "LayoutLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'fn'", "'('", "')'", "'->'", "'{'", "'}'", 
                         "'return'", "';'", "'let'", "'='", "','", "':'", 
                         "'if'", "'else'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, "BINARYOP", 
                          "INT", "IDENTIFIER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "BINARYOP", "INT", "IDENTIFIER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LayoutLangLexer.EOF = antlr4.Token.EOF;
LayoutLangLexer.T__0 = 1;
LayoutLangLexer.T__1 = 2;
LayoutLangLexer.T__2 = 3;
LayoutLangLexer.T__3 = 4;
LayoutLangLexer.T__4 = 5;
LayoutLangLexer.T__5 = 6;
LayoutLangLexer.T__6 = 7;
LayoutLangLexer.T__7 = 8;
LayoutLangLexer.T__8 = 9;
LayoutLangLexer.T__9 = 10;
LayoutLangLexer.T__10 = 11;
LayoutLangLexer.T__11 = 12;
LayoutLangLexer.T__12 = 13;
LayoutLangLexer.T__13 = 14;
LayoutLangLexer.BINARYOP = 15;
LayoutLangLexer.INT = 16;
LayoutLangLexer.IDENTIFIER = 17;
LayoutLangLexer.WS = 18;



