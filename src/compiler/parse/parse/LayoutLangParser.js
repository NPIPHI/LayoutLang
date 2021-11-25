// Generated from LayoutLang.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import LayoutLangListener from './LayoutLangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001e\u00c0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0007\u0002*\n\u0002\f\u0002\u000e",
    "\u0002-\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0007\u0004;\n\u0004\f\u0004\u000e\u0004>\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0005\u0005B\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\tT\n\t\f\t\u000e\tW\u000b\t\u0005\tY\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bh",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u0082\n\u000b\f\u000b\u000e\u000b\u0085\u000b",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u008b\n\f\f\f\u000e\f",
    "\u008e\u000b\f\u0005\f\u0090\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u0096\n\r\f\r\u000e\r\u0099\u000b\r\u0005\r\u009b\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0002\u0003",
    "\u0014\u0015\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&\u0002\u0003\u0004\u0002\u0003\u0003\u0006\u0006",
    "\u0002\u00c3\u0002+\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002",
    "\u0002\u0006<\u0003\u0002\u0002\u0002\bA\u0003\u0002\u0002\u0002\nC",
    "\u0003\u0002\u0002\u0002\fG\u0003\u0002\u0002\u0002\u000eM\u0003\u0002",
    "\u0002\u0002\u0010X\u0003\u0002\u0002\u0002\u0012Z\u0003\u0002\u0002",
    "\u0002\u0014g\u0003\u0002\u0002\u0002\u0016\u008f\u0003\u0002\u0002",
    "\u0002\u0018\u009a\u0003\u0002\u0002\u0002\u001a\u009c\u0003\u0002\u0002",
    "\u0002\u001c\u00a4\u0003\u0002\u0002\u0002\u001e\u00b0\u0003\u0002\u0002",
    "\u0002 \u00b5\u0003\u0002\u0002\u0002\"\u00b9\u0003\u0002\u0002\u0002",
    "$\u00bb\u0003\u0002\u0002\u0002&\u00bd\u0003\u0002\u0002\u0002(*\u0005",
    "\u0004\u0003\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002",
    "+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\u0003\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0007\u000e\u0002\u0002/0\u0007",
    "\u001d\u0002\u000201\u0007\u0017\u0002\u000212\u0005\u0010\t\u00022",
    "3\u0007\u0018\u0002\u000234\u0007\f\u0002\u000245\u0005\u000e\b\u0002",
    "56\u0007\u0019\u0002\u000267\u0005\u0006\u0004\u000278\u0007\u001a\u0002",
    "\u00028\u0005\u0003\u0002\u0002\u00029;\u0005\b\u0005\u0002:9\u0003",
    "\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002",
    "<=\u0003\u0002\u0002\u0002=\u0007\u0003\u0002\u0002\u0002><\u0003\u0002",
    "\u0002\u0002?B\u0005\n\u0006\u0002@B\u0005\f\u0007\u0002A?\u0003\u0002",
    "\u0002\u0002A@\u0003\u0002\u0002\u0002B\t\u0003\u0002\u0002\u0002CD",
    "\u0007\u0012\u0002\u0002DE\u0005\u0014\u000b\u0002EF\u0007\u000f\u0002",
    "\u0002F\u000b\u0003\u0002\u0002\u0002GH\u0007\u0011\u0002\u0002HI\u0007",
    "\u001d\u0002\u0002IJ\u0007\u0010\u0002\u0002JK\u0005\u0014\u000b\u0002",
    "KL\u0007\u000f\u0002\u0002L\r\u0003\u0002\u0002\u0002MN\u0007\u001d",
    "\u0002\u0002N\u000f\u0003\u0002\u0002\u0002OY\u0003\u0002\u0002\u0002",
    "PU\u0005\u0012\n\u0002QR\u0007\u0014\u0002\u0002RT\u0005\u0012\n\u0002",
    "SQ\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU\u0003\u0002",
    "\u0002\u0002XO\u0003\u0002\u0002\u0002XP\u0003\u0002\u0002\u0002Y\u0011",
    "\u0003\u0002\u0002\u0002Z[\u0007\u001d\u0002\u0002[\\\u0007\u0013\u0002",
    "\u0002\\]\u0005\u000e\b\u0002]\u0013\u0003\u0002\u0002\u0002^_\b\u000b",
    "\u0001\u0002_h\u0005\u001c\u000f\u0002`h\u0005\u001e\u0010\u0002ah\u0005",
    " \u0011\u0002bc\u0007\u0003\u0002\u0002ch\u0005\u0014\u000b\rdh\u0005",
    "\"\u0012\u0002eh\u0005$\u0013\u0002fh\u0005&\u0014\u0002g^\u0003\u0002",
    "\u0002\u0002g`\u0003\u0002\u0002\u0002ga\u0003\u0002\u0002\u0002gb\u0003",
    "\u0002\u0002\u0002gd\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "gf\u0003\u0002\u0002\u0002h\u0083\u0003\u0002\u0002\u0002ij\f\f\u0002",
    "\u0002jk\u0007\u0005\u0002\u0002k\u0082\u0005\u0014\u000b\rlm\f\u000b",
    "\u0002\u0002mn\t\u0002\u0002\u0002n\u0082\u0005\u0014\u000b\fop\f\n",
    "\u0002\u0002pq\u0007\u0007\u0002\u0002q\u0082\u0005\u0014\u000b\u000b",
    "rs\f\t\u0002\u0002st\u0007\b\u0002\u0002t\u0082\u0005\u0014\u000b\n",
    "uv\f\b\u0002\u0002vw\u0007\t\u0002\u0002w\u0082\u0005\u0014\u000b\t",
    "xy\f\u0007\u0002\u0002yz\u0007\n\u0002\u0002z\u0082\u0005\u0014\u000b",
    "\b{|\f\u0006\u0002\u0002|}\u0007\u000b\u0002\u0002}\u0082\u0005\u0014",
    "\u000b\u0007~\u007f\f\u000e\u0002\u0002\u007f\u0080\u0007\u0004\u0002",
    "\u0002\u0080\u0082\u0005\u001a\u000e\u0002\u0081i\u0003\u0002\u0002",
    "\u0002\u0081l\u0003\u0002\u0002\u0002\u0081o\u0003\u0002\u0002\u0002",
    "\u0081r\u0003\u0002\u0002\u0002\u0081u\u0003\u0002\u0002\u0002\u0081",
    "x\u0003\u0002\u0002\u0002\u0081{\u0003\u0002\u0002\u0002\u0081~\u0003",
    "\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0015\u0003",
    "\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0090\u0003",
    "\u0002\u0002\u0002\u0087\u008c\u0005\u0014\u000b\u0002\u0088\u0089\u0007",
    "\u0014\u0002\u0002\u0089\u008b\u0005\u0014\u000b\u0002\u008a\u0088\u0003",
    "\u0002\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0090\u0003",
    "\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0086\u0003",
    "\u0002\u0002\u0002\u008f\u0087\u0003\u0002\u0002\u0002\u0090\u0017\u0003",
    "\u0002\u0002\u0002\u0091\u009b\u0003\u0002\u0002\u0002\u0092\u0097\u0007",
    "\u001d\u0002\u0002\u0093\u0094\u0007\u0014\u0002\u0002\u0094\u0096\u0007",
    "\u001d\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0099\u0003",
    "\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003",
    "\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u0097\u0003",
    "\u0002\u0002\u0002\u009a\u0091\u0003\u0002\u0002\u0002\u009a\u0092\u0003",
    "\u0002\u0002\u0002\u009b\u0019\u0003\u0002\u0002\u0002\u009c\u009d\u0007",
    "\u0017\u0002\u0002\u009d\u009e\u0005\u0018\r\u0002\u009e\u009f\u0007",
    "\u0018\u0002\u0002\u009f\u00a0\u0007\r\u0002\u0002\u00a0\u00a1\u0007",
    "\u0019\u0002\u0002\u00a1\u00a2\u0005\u0006\u0004\u0002\u00a2\u00a3\u0007",
    "\u001a\u0002\u0002\u00a3\u001b\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    "\u0015\u0002\u0002\u00a5\u00a6\u0007\u0017\u0002\u0002\u00a6\u00a7\u0005",
    "\u0014\u000b\u0002\u00a7\u00a8\u0007\u0018\u0002\u0002\u00a8\u00a9\u0007",
    "\u0019\u0002\u0002\u00a9\u00aa\u0005\u0006\u0004\u0002\u00aa\u00ab\u0007",
    "\u001a\u0002\u0002\u00ab\u00ac\u0007\u0016\u0002\u0002\u00ac\u00ad\u0007",
    "\u0019\u0002\u0002\u00ad\u00ae\u0005\u0006\u0004\u0002\u00ae\u00af\u0007",
    "\u001a\u0002\u0002\u00af\u001d\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007",
    "\u001d\u0002\u0002\u00b1\u00b2\u0007\u0017\u0002\u0002\u00b2\u00b3\u0005",
    "\u0016\f\u0002\u00b3\u00b4\u0007\u0018\u0002\u0002\u00b4\u001f\u0003",
    "\u0002\u0002\u0002\u00b5\u00b6\u0007\u0017\u0002\u0002\u00b6\u00b7\u0005",
    "\u0014\u000b\u0002\u00b7\u00b8\u0007\u0018\u0002\u0002\u00b8!\u0003",
    "\u0002\u0002\u0002\u00b9\u00ba\u0007\u001d\u0002\u0002\u00ba#\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0007\u001b\u0002\u0002\u00bc%\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007\u001c\u0002\u0002\u00be\'\u0003",
    "\u0002\u0002\u0002\u000e+<AUXg\u0081\u0083\u008c\u008f\u0097\u009a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LayoutLangParser extends antlr4.Parser {

    static grammarFileName = "LayoutLang.g4";
    static literalNames = [ null, "'-'", "'|'", null, "'+'", null, null, 
                            null, "'&&'", "'||'", "'->'", "'=>'", "'fn'", 
                            "';'", "'='", "'let'", "'return'", "':'", "','", 
                            "'if'", "'else'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "MINUS", "PIPE", "BINARYOP0", "BINARYOP1", 
                             "BINARYOP2", "BINARYOP3", "BINARYOP4", "BINARYOP5", 
                             "BINARYOP6", "ARROW", "FATARROW", "FUNCTION", 
                             "SEMICOLON", "EQ", "LET", "RETURN", "COLON", 
                             "COMMA", "IF", "ELSE", "LEFTPAREN", "RIGHTPAREN", 
                             "LEFTCURLY", "RIGHTCURLY", "INT", "FLOAT", 
                             "IDENTIFIER", "WS" ];
    static ruleNames = [ "body", "func", "funcBody", "statement", "returnStatement", 
                         "letStatement", "type", "args", "arg", "expr", 
                         "exprList", "identifierList", "lambda", "ifExpr", 
                         "funcCall", "parenExpr", "identifier", "integer", 
                         "floatVal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LayoutLangParser.ruleNames;
        this.literalNames = LayoutLangParser.literalNames;
        this.symbolicNames = LayoutLangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 8);
    		case 3:
    			return this.precpred(this._ctx, 7);
    		case 4:
    			return this.precpred(this._ctx, 6);
    		case 5:
    			return this.precpred(this._ctx, 5);
    		case 6:
    			return this.precpred(this._ctx, 4);
    		case 7:
    			return this.precpred(this._ctx, 12);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LayoutLangParser.RULE_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.FUNCTION) {
	            this.state = 38;
	            localctx._func = this.func();
	            localctx.functions.push(localctx._func);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LayoutLangParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(LayoutLangParser.FUNCTION);
	        this.state = 45;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 46;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 47;
	        localctx.arguments = this.args();
	        this.state = 48;
	        this.match(LayoutLangParser.RIGHTPAREN);
	        this.state = 49;
	        this.match(LayoutLangParser.ARROW);
	        this.state = 50;
	        localctx.type_decl = this.type();
	        this.state = 51;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 52;
	        localctx.func_body = this.funcBody();
	        this.state = 53;
	        this.match(LayoutLangParser.RIGHTCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcBody() {
	    let localctx = new FuncBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LayoutLangParser.RULE_funcBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.LET || _la===LayoutLangParser.RETURN) {
	            this.state = 55;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LayoutLangParser.RULE_statement);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.RETURN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.returnStatement();
	            break;
	        case LayoutLangParser.LET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.letStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LayoutLangParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(LayoutLangParser.RETURN);
	        this.state = 66;
	        localctx.expression = this.expr(0);
	        this.state = 67;
	        this.match(LayoutLangParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letStatement() {
	    let localctx = new LetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LayoutLangParser.RULE_letStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(LayoutLangParser.LET);
	        this.state = 70;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 71;
	        this.match(LayoutLangParser.EQ);
	        this.state = 72;
	        localctx.expression = this.expr(0);
	        this.state = 73;
	        this.match(LayoutLangParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LayoutLangParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(LayoutLangParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LayoutLangParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.RIGHTPAREN:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case LayoutLangParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            localctx._arg = this.arg();
	            localctx.argList.push(localctx._arg);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LayoutLangParser.COMMA) {
	                this.state = 79;
	                this.match(LayoutLangParser.COMMA);
	                this.state = 80;
	                localctx._arg = this.arg();
	                localctx.argList.push(localctx._arg);
	                this.state = 85;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LayoutLangParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 89;
	        this.match(LayoutLangParser.COLON);
	        this.state = 90;
	        localctx.type_decl = this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, LayoutLangParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 93;
	            this.ifExpr();
	            break;

	        case 2:
	            this.state = 94;
	            this.funcCall();
	            break;

	        case 3:
	            this.state = 95;
	            this.parenExpr();
	            break;

	        case 4:
	            this.state = 96;
	            this.match(LayoutLangParser.MINUS);
	            this.state = 97;
	            this.expr(11);
	            break;

	        case 5:
	            this.state = 98;
	            this.identifier();
	            break;

	        case 6:
	            this.state = 99;
	            this.integer();
	            break;

	        case 7:
	            this.state = 100;
	            this.floatVal();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 127;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 104;
	                    this.match(LayoutLangParser.BINARYOP0);
	                    this.state = 105;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 107;
	                    _la = this._input.LA(1);
	                    if(!(_la===LayoutLangParser.MINUS || _la===LayoutLangParser.BINARYOP1)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 108;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 109;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 110;
	                    this.match(LayoutLangParser.BINARYOP2);
	                    this.state = 111;
	                    this.expr(9);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 112;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 113;
	                    this.match(LayoutLangParser.BINARYOP3);
	                    this.state = 114;
	                    this.expr(8);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 115;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 116;
	                    this.match(LayoutLangParser.BINARYOP4);
	                    this.state = 117;
	                    this.expr(7);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 119;
	                    this.match(LayoutLangParser.BINARYOP5);
	                    this.state = 120;
	                    this.expr(6);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 122;
	                    this.match(LayoutLangParser.BINARYOP6);
	                    this.state = 123;
	                    this.expr(5);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 124;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 125;
	                    this.match(LayoutLangParser.PIPE);
	                    this.state = 126;
	                    this.lambda();
	                    break;

	                } 
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LayoutLangParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.RIGHTPAREN:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case LayoutLangParser.MINUS:
	        case LayoutLangParser.IF:
	        case LayoutLangParser.LEFTPAREN:
	        case LayoutLangParser.INT:
	        case LayoutLangParser.FLOAT:
	        case LayoutLangParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            localctx._expr = this.expr(0);
	            localctx.argList.push(localctx._expr);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LayoutLangParser.COMMA) {
	                this.state = 134;
	                this.match(LayoutLangParser.COMMA);
	                this.state = 135;
	                localctx._expr = this.expr(0);
	                localctx.argList.push(localctx._expr);
	                this.state = 140;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierList() {
	    let localctx = new IdentifierListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LayoutLangParser.RULE_identifierList);
	    var _la = 0; // Token type
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.RIGHTPAREN:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case LayoutLangParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            localctx._IDENTIFIER = this.match(LayoutLangParser.IDENTIFIER);
	            localctx.idenList.push(localctx._IDENTIFIER);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LayoutLangParser.COMMA) {
	                this.state = 145;
	                this.match(LayoutLangParser.COMMA);
	                this.state = 146;
	                localctx._IDENTIFIER = this.match(LayoutLangParser.IDENTIFIER);
	                localctx.idenList.push(localctx._IDENTIFIER);
	                this.state = 151;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lambda() {
	    let localctx = new LambdaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LayoutLangParser.RULE_lambda);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 155;
	        localctx.argsList = this.identifierList();
	        this.state = 156;
	        this.match(LayoutLangParser.RIGHTPAREN);
	        this.state = 157;
	        this.match(LayoutLangParser.FATARROW);
	        this.state = 158;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 159;
	        localctx.func_body = this.funcBody();
	        this.state = 160;
	        this.match(LayoutLangParser.RIGHTCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifExpr() {
	    let localctx = new IfExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LayoutLangParser.RULE_ifExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(LayoutLangParser.IF);
	        this.state = 163;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 164;
	        localctx.pred = this.expr(0);
	        this.state = 165;
	        this.match(LayoutLangParser.RIGHTPAREN);
	        this.state = 166;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 167;
	        localctx.then_body = this.funcBody();
	        this.state = 168;
	        this.match(LayoutLangParser.RIGHTCURLY);
	        this.state = 169;
	        this.match(LayoutLangParser.ELSE);
	        this.state = 170;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 171;
	        localctx.else_body = this.funcBody();
	        this.state = 172;
	        this.match(LayoutLangParser.RIGHTCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcCall() {
	    let localctx = new FuncCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LayoutLangParser.RULE_funcCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 175;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 176;
	        localctx.argList = this.exprList();
	        this.state = 177;
	        this.match(LayoutLangParser.RIGHTPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parenExpr() {
	    let localctx = new ParenExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LayoutLangParser.RULE_parenExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 180;
	        localctx.expression = this.expr(0);
	        this.state = 181;
	        this.match(LayoutLangParser.RIGHTPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LayoutLangParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LayoutLangParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        localctx.value = this.match(LayoutLangParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatVal() {
	    let localctx = new FloatValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LayoutLangParser.RULE_floatVal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        localctx.value = this.match(LayoutLangParser.FLOAT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LayoutLangParser.EOF = antlr4.Token.EOF;
LayoutLangParser.MINUS = 1;
LayoutLangParser.PIPE = 2;
LayoutLangParser.BINARYOP0 = 3;
LayoutLangParser.BINARYOP1 = 4;
LayoutLangParser.BINARYOP2 = 5;
LayoutLangParser.BINARYOP3 = 6;
LayoutLangParser.BINARYOP4 = 7;
LayoutLangParser.BINARYOP5 = 8;
LayoutLangParser.BINARYOP6 = 9;
LayoutLangParser.ARROW = 10;
LayoutLangParser.FATARROW = 11;
LayoutLangParser.FUNCTION = 12;
LayoutLangParser.SEMICOLON = 13;
LayoutLangParser.EQ = 14;
LayoutLangParser.LET = 15;
LayoutLangParser.RETURN = 16;
LayoutLangParser.COLON = 17;
LayoutLangParser.COMMA = 18;
LayoutLangParser.IF = 19;
LayoutLangParser.ELSE = 20;
LayoutLangParser.LEFTPAREN = 21;
LayoutLangParser.RIGHTPAREN = 22;
LayoutLangParser.LEFTCURLY = 23;
LayoutLangParser.RIGHTCURLY = 24;
LayoutLangParser.INT = 25;
LayoutLangParser.FLOAT = 26;
LayoutLangParser.IDENTIFIER = 27;
LayoutLangParser.WS = 28;

LayoutLangParser.RULE_body = 0;
LayoutLangParser.RULE_func = 1;
LayoutLangParser.RULE_funcBody = 2;
LayoutLangParser.RULE_statement = 3;
LayoutLangParser.RULE_returnStatement = 4;
LayoutLangParser.RULE_letStatement = 5;
LayoutLangParser.RULE_type = 6;
LayoutLangParser.RULE_args = 7;
LayoutLangParser.RULE_arg = 8;
LayoutLangParser.RULE_expr = 9;
LayoutLangParser.RULE_exprList = 10;
LayoutLangParser.RULE_identifierList = 11;
LayoutLangParser.RULE_lambda = 12;
LayoutLangParser.RULE_ifExpr = 13;
LayoutLangParser.RULE_funcCall = 14;
LayoutLangParser.RULE_parenExpr = 15;
LayoutLangParser.RULE_identifier = 16;
LayoutLangParser.RULE_integer = 17;
LayoutLangParser.RULE_floatVal = 18;

class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_body;
        this._func = null; // FuncContext
        this.functions = []; // of FuncContexts
    }

	func = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncContext);
	    } else {
	        return this.getTypedRuleContext(FuncContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitBody(this);
		}
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_func;
        this.name = null; // Token
        this.arguments = null; // ArgsContext
        this.type_decl = null; // TypeContext
        this.func_body = null; // FuncBodyContext
    }

	FUNCTION() {
	    return this.getToken(LayoutLangParser.FUNCTION, 0);
	};

	LEFTPAREN() {
	    return this.getToken(LayoutLangParser.LEFTPAREN, 0);
	};

	RIGHTPAREN() {
	    return this.getToken(LayoutLangParser.RIGHTPAREN, 0);
	};

	ARROW() {
	    return this.getToken(LayoutLangParser.ARROW, 0);
	};

	LEFTCURLY() {
	    return this.getToken(LayoutLangParser.LEFTCURLY, 0);
	};

	RIGHTCURLY() {
	    return this.getToken(LayoutLangParser.RIGHTCURLY, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	funcBody() {
	    return this.getTypedRuleContext(FuncBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitFunc(this);
		}
	}


}



class FuncBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_funcBody;
        this._statement = null; // StatementContext
        this.statements = []; // of StatementContexts
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterFuncBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitFuncBody(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_statement;
    }

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	letStatement() {
	    return this.getTypedRuleContext(LetStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_returnStatement;
        this.expression = null; // ExprContext
    }

	RETURN() {
	    return this.getToken(LayoutLangParser.RETURN, 0);
	};

	SEMICOLON() {
	    return this.getToken(LayoutLangParser.SEMICOLON, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitReturnStatement(this);
		}
	}


}



class LetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_letStatement;
        this.name = null; // Token
        this.expression = null; // ExprContext
    }

	LET() {
	    return this.getToken(LayoutLangParser.LET, 0);
	};

	EQ() {
	    return this.getToken(LayoutLangParser.EQ, 0);
	};

	SEMICOLON() {
	    return this.getToken(LayoutLangParser.SEMICOLON, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterLetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitLetStatement(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_type;
    }

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitType(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_args;
        this._arg = null; // ArgContext
        this.argList = []; // of ArgContexts
    }

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LayoutLangParser.COMMA);
	    } else {
	        return this.getToken(LayoutLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitArgs(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_arg;
        this.name = null; // Token
        this.type_decl = null; // TypeContext
    }

	COLON() {
	    return this.getToken(LayoutLangParser.COLON, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitArg(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_expr;
    }

	ifExpr() {
	    return this.getTypedRuleContext(IfExprContext,0);
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	parenExpr() {
	    return this.getTypedRuleContext(ParenExprContext,0);
	};

	MINUS() {
	    return this.getToken(LayoutLangParser.MINUS, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	floatVal() {
	    return this.getTypedRuleContext(FloatValContext,0);
	};

	BINARYOP0() {
	    return this.getToken(LayoutLangParser.BINARYOP0, 0);
	};

	BINARYOP1() {
	    return this.getToken(LayoutLangParser.BINARYOP1, 0);
	};

	BINARYOP2() {
	    return this.getToken(LayoutLangParser.BINARYOP2, 0);
	};

	BINARYOP3() {
	    return this.getToken(LayoutLangParser.BINARYOP3, 0);
	};

	BINARYOP4() {
	    return this.getToken(LayoutLangParser.BINARYOP4, 0);
	};

	BINARYOP5() {
	    return this.getToken(LayoutLangParser.BINARYOP5, 0);
	};

	BINARYOP6() {
	    return this.getToken(LayoutLangParser.BINARYOP6, 0);
	};

	PIPE() {
	    return this.getToken(LayoutLangParser.PIPE, 0);
	};

	lambda() {
	    return this.getTypedRuleContext(LambdaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_exprList;
        this._expr = null; // ExprContext
        this.argList = []; // of ExprContexts
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LayoutLangParser.COMMA);
	    } else {
	        return this.getToken(LayoutLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitExprList(this);
		}
	}


}



class IdentifierListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_identifierList;
        this._IDENTIFIER = null; // Token
        this.idenList = []; // of Tokens
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LayoutLangParser.IDENTIFIER);
	    } else {
	        return this.getToken(LayoutLangParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LayoutLangParser.COMMA);
	    } else {
	        return this.getToken(LayoutLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterIdentifierList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitIdentifierList(this);
		}
	}


}



class LambdaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_lambda;
        this.argsList = null; // IdentifierListContext
        this.func_body = null; // FuncBodyContext
    }

	LEFTPAREN() {
	    return this.getToken(LayoutLangParser.LEFTPAREN, 0);
	};

	RIGHTPAREN() {
	    return this.getToken(LayoutLangParser.RIGHTPAREN, 0);
	};

	FATARROW() {
	    return this.getToken(LayoutLangParser.FATARROW, 0);
	};

	LEFTCURLY() {
	    return this.getToken(LayoutLangParser.LEFTCURLY, 0);
	};

	RIGHTCURLY() {
	    return this.getToken(LayoutLangParser.RIGHTCURLY, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	funcBody() {
	    return this.getTypedRuleContext(FuncBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterLambda(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitLambda(this);
		}
	}


}



class IfExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_ifExpr;
        this.pred = null; // ExprContext
        this.then_body = null; // FuncBodyContext
        this.else_body = null; // FuncBodyContext
    }

	IF() {
	    return this.getToken(LayoutLangParser.IF, 0);
	};

	LEFTPAREN() {
	    return this.getToken(LayoutLangParser.LEFTPAREN, 0);
	};

	RIGHTPAREN() {
	    return this.getToken(LayoutLangParser.RIGHTPAREN, 0);
	};

	LEFTCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LayoutLangParser.LEFTCURLY);
	    } else {
	        return this.getToken(LayoutLangParser.LEFTCURLY, i);
	    }
	};


	RIGHTCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LayoutLangParser.RIGHTCURLY);
	    } else {
	        return this.getToken(LayoutLangParser.RIGHTCURLY, i);
	    }
	};


	ELSE() {
	    return this.getToken(LayoutLangParser.ELSE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	funcBody = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncBodyContext);
	    } else {
	        return this.getTypedRuleContext(FuncBodyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterIfExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitIfExpr(this);
		}
	}


}



class FuncCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_funcCall;
        this.name = null; // Token
        this.argList = null; // ExprListContext
    }

	LEFTPAREN() {
	    return this.getToken(LayoutLangParser.LEFTPAREN, 0);
	};

	RIGHTPAREN() {
	    return this.getToken(LayoutLangParser.RIGHTPAREN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitFuncCall(this);
		}
	}


}



class ParenExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_parenExpr;
        this.expression = null; // ExprContext
    }

	LEFTPAREN() {
	    return this.getToken(LayoutLangParser.LEFTPAREN, 0);
	};

	RIGHTPAREN() {
	    return this.getToken(LayoutLangParser.RIGHTPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterParenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitParenExpr(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_identifier;
        this.name = null; // Token
    }

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_integer;
        this.value = null; // Token
    }

	INT() {
	    return this.getToken(LayoutLangParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitInteger(this);
		}
	}


}



class FloatValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_floatVal;
        this.value = null; // Token
    }

	FLOAT() {
	    return this.getToken(LayoutLangParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterFloatVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitFloatVal(this);
		}
	}


}




LayoutLangParser.BodyContext = BodyContext; 
LayoutLangParser.FuncContext = FuncContext; 
LayoutLangParser.FuncBodyContext = FuncBodyContext; 
LayoutLangParser.StatementContext = StatementContext; 
LayoutLangParser.ReturnStatementContext = ReturnStatementContext; 
LayoutLangParser.LetStatementContext = LetStatementContext; 
LayoutLangParser.TypeContext = TypeContext; 
LayoutLangParser.ArgsContext = ArgsContext; 
LayoutLangParser.ArgContext = ArgContext; 
LayoutLangParser.ExprContext = ExprContext; 
LayoutLangParser.ExprListContext = ExprListContext; 
LayoutLangParser.IdentifierListContext = IdentifierListContext; 
LayoutLangParser.LambdaContext = LambdaContext; 
LayoutLangParser.IfExprContext = IfExprContext; 
LayoutLangParser.FuncCallContext = FuncCallContext; 
LayoutLangParser.ParenExprContext = ParenExprContext; 
LayoutLangParser.IdentifierContext = IdentifierContext; 
LayoutLangParser.IntegerContext = IntegerContext; 
LayoutLangParser.FloatValContext = FloatValContext; 
