// Generated from LayoutLang.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import LayoutLangListener from './LayoutLangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001c\u00a6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0007\u0002",
    "&\n\u0002\f\u0002\u000e\u0002)\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0007\u00047\n\u0004\f\u0004",
    "\u000e\u0004:\u000b\u0004\u0003\u0005\u0003\u0005\u0005\u0005>\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0007\tP\n\t\f\t\u000e\tS\u000b\t\u0005\t",
    "U\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000bd\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b{\n\u000b\f\u000b\u000e\u000b~\u000b\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u0084\n\f\f\f\u000e\f\u0087\u000b\f\u0005\f\u0089",
    "\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0002\u0003\u0014\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0003\u0004\u0002",
    "\u0003\u0003\u0005\u0005\u0002\u00a8\u0002\'\u0003\u0002\u0002\u0002",
    "\u0004*\u0003\u0002\u0002\u0002\u00068\u0003\u0002\u0002\u0002\b=\u0003",
    "\u0002\u0002\u0002\n?\u0003\u0002\u0002\u0002\fC\u0003\u0002\u0002\u0002",
    "\u000eI\u0003\u0002\u0002\u0002\u0010T\u0003\u0002\u0002\u0002\u0012",
    "V\u0003\u0002\u0002\u0002\u0014c\u0003\u0002\u0002\u0002\u0016\u0088",
    "\u0003\u0002\u0002\u0002\u0018\u008a\u0003\u0002\u0002\u0002\u001a\u0096",
    "\u0003\u0002\u0002\u0002\u001c\u009b\u0003\u0002\u0002\u0002\u001e\u009f",
    "\u0003\u0002\u0002\u0002 \u00a1\u0003\u0002\u0002\u0002\"\u00a3\u0003",
    "\u0002\u0002\u0002$&\u0005\u0004\u0003\u0002%$\u0003\u0002\u0002\u0002",
    "&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002",
    "\u0002\u0002(\u0003\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002",
    "*+\u0007\f\u0002\u0002+,\u0007\u001b\u0002\u0002,-\u0007\u0015\u0002",
    "\u0002-.\u0005\u0010\t\u0002./\u0007\u0016\u0002\u0002/0\u0007\u000b",
    "\u0002\u000201\u0005\u000e\b\u000212\u0007\u0017\u0002\u000223\u0005",
    "\u0006\u0004\u000234\u0007\u0018\u0002\u00024\u0005\u0003\u0002\u0002",
    "\u000257\u0005\b\u0005\u000265\u0003\u0002\u0002\u00027:\u0003\u0002",
    "\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u0007",
    "\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;>\u0005\n\u0006\u0002",
    "<>\u0005\f\u0007\u0002=;\u0003\u0002\u0002\u0002=<\u0003\u0002\u0002",
    "\u0002>\t\u0003\u0002\u0002\u0002?@\u0007\u0010\u0002\u0002@A\u0005",
    "\u0014\u000b\u0002AB\u0007\r\u0002\u0002B\u000b\u0003\u0002\u0002\u0002",
    "CD\u0007\u000f\u0002\u0002DE\u0007\u001b\u0002\u0002EF\u0007\u000e\u0002",
    "\u0002FG\u0005\u0014\u000b\u0002GH\u0007\r\u0002\u0002H\r\u0003\u0002",
    "\u0002\u0002IJ\u0007\u001b\u0002\u0002J\u000f\u0003\u0002\u0002\u0002",
    "KU\u0003\u0002\u0002\u0002LQ\u0005\u0012\n\u0002MN\u0007\u0012\u0002",
    "\u0002NP\u0005\u0012\n\u0002OM\u0003\u0002\u0002\u0002PS\u0003\u0002",
    "\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RU\u0003",
    "\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TK\u0003\u0002\u0002\u0002",
    "TL\u0003\u0002\u0002\u0002U\u0011\u0003\u0002\u0002\u0002VW\u0007\u001b",
    "\u0002\u0002WX\u0007\u0011\u0002\u0002XY\u0005\u000e\b\u0002Y\u0013",
    "\u0003\u0002\u0002\u0002Z[\b\u000b\u0001\u0002[d\u0005\u0018\r\u0002",
    "\\d\u0005\u001a\u000e\u0002]d\u0005\u001c\u000f\u0002^_\u0007\u0003",
    "\u0002\u0002_d\u0005\u0014\u000b\r`d\u0005 \u0011\u0002ad\u0005\u001e",
    "\u0010\u0002bd\u0005\"\u0012\u0002cZ\u0003\u0002\u0002\u0002c\\\u0003",
    "\u0002\u0002\u0002c]\u0003\u0002\u0002\u0002c^\u0003\u0002\u0002\u0002",
    "c`\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cb\u0003\u0002\u0002",
    "\u0002d|\u0003\u0002\u0002\u0002ef\f\f\u0002\u0002fg\u0007\u0004\u0002",
    "\u0002g{\u0005\u0014\u000b\rhi\f\u000b\u0002\u0002ij\t\u0002\u0002\u0002",
    "j{\u0005\u0014\u000b\fkl\f\n\u0002\u0002lm\u0007\u0006\u0002\u0002m",
    "{\u0005\u0014\u000b\u000bno\f\t\u0002\u0002op\u0007\u0007\u0002\u0002",
    "p{\u0005\u0014\u000b\nqr\f\b\u0002\u0002rs\u0007\b\u0002\u0002s{\u0005",
    "\u0014\u000b\ttu\f\u0007\u0002\u0002uv\u0007\t\u0002\u0002v{\u0005\u0014",
    "\u000b\bwx\f\u0006\u0002\u0002xy\u0007\n\u0002\u0002y{\u0005\u0014\u000b",
    "\u0007ze\u0003\u0002\u0002\u0002zh\u0003\u0002\u0002\u0002zk\u0003\u0002",
    "\u0002\u0002zn\u0003\u0002\u0002\u0002zq\u0003\u0002\u0002\u0002zt\u0003",
    "\u0002\u0002\u0002zw\u0003\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002",
    "|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u0015\u0003\u0002",
    "\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0089\u0003\u0002\u0002",
    "\u0002\u0080\u0085\u0005\u0014\u000b\u0002\u0081\u0082\u0007\u0012\u0002",
    "\u0002\u0082\u0084\u0005\u0014\u000b\u0002\u0083\u0081\u0003\u0002\u0002",
    "\u0002\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0089\u0003\u0002\u0002",
    "\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u007f\u0003\u0002\u0002",
    "\u0002\u0088\u0080\u0003\u0002\u0002\u0002\u0089\u0017\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007\u0013\u0002\u0002\u008b\u008c\u0007\u0015\u0002",
    "\u0002\u008c\u008d\u0005\u0014\u000b\u0002\u008d\u008e\u0007\u0016\u0002",
    "\u0002\u008e\u008f\u0007\u0017\u0002\u0002\u008f\u0090\u0005\u0006\u0004",
    "\u0002\u0090\u0091\u0007\u0018\u0002\u0002\u0091\u0092\u0007\u0014\u0002",
    "\u0002\u0092\u0093\u0007\u0017\u0002\u0002\u0093\u0094\u0005\u0006\u0004",
    "\u0002\u0094\u0095\u0007\u0018\u0002\u0002\u0095\u0019\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0007\u001b\u0002\u0002\u0097\u0098\u0007\u0015\u0002",
    "\u0002\u0098\u0099\u0005\u0016\f\u0002\u0099\u009a\u0007\u0016\u0002",
    "\u0002\u009a\u001b\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u0015\u0002",
    "\u0002\u009c\u009d\u0005\u0014\u000b\u0002\u009d\u009e\u0007\u0016\u0002",
    "\u0002\u009e\u001d\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u001b\u0002",
    "\u0002\u00a0\u001f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0019\u0002",
    "\u0002\u00a2!\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u001a\u0002",
    "\u0002\u00a4#\u0003\u0002\u0002\u0002\f\'8=QTcz|\u0085\u0088"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LayoutLangParser extends antlr4.Parser {

    static grammarFileName = "LayoutLang.g4";
    static literalNames = [ null, "'-'", null, "'+'", null, null, null, 
                            "'&&'", "'|'", "'->'", "'fn'", "';'", "'='", 
                            "'let'", "'return'", "':'", "','", "'if'", "'else'", 
                            "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "MINUS", "BINARYOP0", "BINARYOP1", "BINARYOP2", 
                             "BINARYOP3", "BINARYOP4", "BINARYOP5", "BINARYOP6", 
                             "ARROW", "FUNCTION", "SEMICOLON", "EQ", "LET", 
                             "RETURN", "COLON", "COMMA", "IF", "ELSE", "LEFTPAREN", 
                             "RIGHTPAREN", "LEFTCURLY", "RIGHTCURLY", "INT", 
                             "FLOAT", "IDENTIFIER", "WS" ];
    static ruleNames = [ "body", "func", "funcBody", "statement", "returnStatement", 
                         "letStatement", "type", "args", "arg", "expr", 
                         "exprList", "ifExpr", "funcCall", "parenExpr", 
                         "identifier", "integer", "floatVal" ];

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
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.FUNCTION) {
	            this.state = 34;
	            localctx._func = this.func();
	            localctx.functions.push(localctx._func);
	            this.state = 39;
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
	        this.state = 40;
	        this.match(LayoutLangParser.FUNCTION);
	        this.state = 41;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 42;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 43;
	        localctx.arguments = this.args();
	        this.state = 44;
	        this.match(LayoutLangParser.RIGHTPAREN);
	        this.state = 45;
	        this.match(LayoutLangParser.ARROW);
	        this.state = 46;
	        localctx.type_decl = this.type();
	        this.state = 47;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 48;
	        localctx.func_body = this.funcBody();
	        this.state = 49;
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
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.LET || _la===LayoutLangParser.RETURN) {
	            this.state = 51;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 56;
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
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.RETURN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.returnStatement();
	            break;
	        case LayoutLangParser.LET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
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
	        this.state = 61;
	        this.match(LayoutLangParser.RETURN);
	        this.state = 62;
	        localctx.expression = this.expr(0);
	        this.state = 63;
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
	        this.state = 65;
	        this.match(LayoutLangParser.LET);
	        this.state = 66;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 67;
	        this.match(LayoutLangParser.EQ);
	        this.state = 68;
	        localctx.expression = this.expr(0);
	        this.state = 69;
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
	        this.state = 71;
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
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.RIGHTPAREN:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case LayoutLangParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            localctx._arg = this.arg();
	            localctx.argList.push(localctx._arg);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LayoutLangParser.COMMA) {
	                this.state = 75;
	                this.match(LayoutLangParser.COMMA);
	                this.state = 76;
	                localctx._arg = this.arg();
	                localctx.argList.push(localctx._arg);
	                this.state = 81;
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
	        this.state = 84;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 85;
	        this.match(LayoutLangParser.COLON);
	        this.state = 86;
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
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 89;
	            this.ifExpr();
	            break;

	        case 2:
	            this.state = 90;
	            this.funcCall();
	            break;

	        case 3:
	            this.state = 91;
	            this.parenExpr();
	            break;

	        case 4:
	            this.state = 92;
	            this.match(LayoutLangParser.MINUS);
	            this.state = 93;
	            this.expr(11);
	            break;

	        case 5:
	            this.state = 94;
	            this.integer();
	            break;

	        case 6:
	            this.state = 95;
	            this.identifier();
	            break;

	        case 7:
	            this.state = 96;
	            this.floatVal();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 122;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 120;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 99;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 100;
	                    this.match(LayoutLangParser.BINARYOP0);
	                    this.state = 101;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 103;
	                    _la = this._input.LA(1);
	                    if(!(_la===LayoutLangParser.MINUS || _la===LayoutLangParser.BINARYOP1)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 104;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 105;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 106;
	                    this.match(LayoutLangParser.BINARYOP2);
	                    this.state = 107;
	                    this.expr(9);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 108;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 109;
	                    this.match(LayoutLangParser.BINARYOP3);
	                    this.state = 110;
	                    this.expr(8);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 112;
	                    this.match(LayoutLangParser.BINARYOP4);
	                    this.state = 113;
	                    this.expr(7);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 114;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 115;
	                    this.match(LayoutLangParser.BINARYOP5);
	                    this.state = 116;
	                    this.expr(6);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                    this.state = 117;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 118;
	                    this.match(LayoutLangParser.BINARYOP6);
	                    this.state = 119;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 124;
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
	        this.state = 134;
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
	            this.state = 126;
	            localctx._expr = this.expr(0);
	            localctx.argList.push(localctx._expr);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LayoutLangParser.COMMA) {
	                this.state = 127;
	                this.match(LayoutLangParser.COMMA);
	                this.state = 128;
	                localctx._expr = this.expr(0);
	                localctx.argList.push(localctx._expr);
	                this.state = 133;
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



	ifExpr() {
	    let localctx = new IfExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LayoutLangParser.RULE_ifExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(LayoutLangParser.IF);
	        this.state = 137;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 138;
	        localctx.pred = this.expr(0);
	        this.state = 139;
	        this.match(LayoutLangParser.RIGHTPAREN);
	        this.state = 140;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 141;
	        localctx.then_body = this.funcBody();
	        this.state = 142;
	        this.match(LayoutLangParser.RIGHTCURLY);
	        this.state = 143;
	        this.match(LayoutLangParser.ELSE);
	        this.state = 144;
	        this.match(LayoutLangParser.LEFTCURLY);
	        this.state = 145;
	        localctx.else_body = this.funcBody();
	        this.state = 146;
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
	    this.enterRule(localctx, 24, LayoutLangParser.RULE_funcCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 149;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 150;
	        localctx.argList = this.exprList();
	        this.state = 151;
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
	    this.enterRule(localctx, 26, LayoutLangParser.RULE_parenExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(LayoutLangParser.LEFTPAREN);
	        this.state = 154;
	        localctx.expression = this.expr(0);
	        this.state = 155;
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
	    this.enterRule(localctx, 28, LayoutLangParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
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
	    this.enterRule(localctx, 30, LayoutLangParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
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
	    this.enterRule(localctx, 32, LayoutLangParser.RULE_floatVal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
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
LayoutLangParser.BINARYOP0 = 2;
LayoutLangParser.BINARYOP1 = 3;
LayoutLangParser.BINARYOP2 = 4;
LayoutLangParser.BINARYOP3 = 5;
LayoutLangParser.BINARYOP4 = 6;
LayoutLangParser.BINARYOP5 = 7;
LayoutLangParser.BINARYOP6 = 8;
LayoutLangParser.ARROW = 9;
LayoutLangParser.FUNCTION = 10;
LayoutLangParser.SEMICOLON = 11;
LayoutLangParser.EQ = 12;
LayoutLangParser.LET = 13;
LayoutLangParser.RETURN = 14;
LayoutLangParser.COLON = 15;
LayoutLangParser.COMMA = 16;
LayoutLangParser.IF = 17;
LayoutLangParser.ELSE = 18;
LayoutLangParser.LEFTPAREN = 19;
LayoutLangParser.RIGHTPAREN = 20;
LayoutLangParser.LEFTCURLY = 21;
LayoutLangParser.RIGHTCURLY = 22;
LayoutLangParser.INT = 23;
LayoutLangParser.FLOAT = 24;
LayoutLangParser.IDENTIFIER = 25;
LayoutLangParser.WS = 26;

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
LayoutLangParser.RULE_ifExpr = 11;
LayoutLangParser.RULE_funcCall = 12;
LayoutLangParser.RULE_parenExpr = 13;
LayoutLangParser.RULE_identifier = 14;
LayoutLangParser.RULE_integer = 15;
LayoutLangParser.RULE_floatVal = 16;

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

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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
LayoutLangParser.IfExprContext = IfExprContext; 
LayoutLangParser.FuncCallContext = FuncCallContext; 
LayoutLangParser.ParenExprContext = ParenExprContext; 
LayoutLangParser.IdentifierContext = IdentifierContext; 
LayoutLangParser.IntegerContext = IntegerContext; 
LayoutLangParser.FloatValContext = FloatValContext; 
