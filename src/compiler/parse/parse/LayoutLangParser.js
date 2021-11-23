// Generated from LayoutLang.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import LayoutLangListener from './LayoutLangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0012\u007f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0007\u0002$\n\u0002\f\u0002",
    "\u000e\u0002\'\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0007\u00045\n\u0004\f\u0004\u000e\u0004",
    "8\u000b\u0004\u0003\u0005\u0003\u0005\u0005\u0005<\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0007\tM\n\t\f\t\u000e\tP\u000b\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\\\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000bb\n\u000b\f\u000b\u000e\u000be\u000b\u000b\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\rn\n\r\f\r\u000e",
    "\rq\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0002\u0003\u0014\u0012\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0002\u0002",
    "x\u0002%\u0003\u0002\u0002\u0002\u0004(\u0003\u0002\u0002\u0002\u0006",
    "6\u0003\u0002\u0002\u0002\b;\u0003\u0002\u0002\u0002\n=\u0003\u0002",
    "\u0002\u0002\fA\u0003\u0002\u0002\u0002\u000eG\u0003\u0002\u0002\u0002",
    "\u0010I\u0003\u0002\u0002\u0002\u0012Q\u0003\u0002\u0002\u0002\u0014",
    "[\u0003\u0002\u0002\u0002\u0016f\u0003\u0002\u0002\u0002\u0018h\u0003",
    "\u0002\u0002\u0002\u001at\u0003\u0002\u0002\u0002\u001cx\u0003\u0002",
    "\u0002\u0002\u001ez\u0003\u0002\u0002\u0002 |\u0003\u0002\u0002\u0002",
    "\"$\u0005\u0004\u0003\u0002#\"\u0003\u0002\u0002\u0002$\'\u0003\u0002",
    "\u0002\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\u0003",
    "\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002()\u0007\u0003\u0002",
    "\u0002)*\u0007\u0011\u0002\u0002*+\u0007\u0004\u0002\u0002+,\u0005\u0010",
    "\t\u0002,-\u0007\u0005\u0002\u0002-.\u0007\u0006\u0002\u0002./\u0005",
    "\u000e\b\u0002/0\u0007\u0007\u0002\u000201\u0005\u0006\u0004\u00021",
    "2\u0007\b\u0002\u00022\u0005\u0003\u0002\u0002\u000235\u0005\b\u0005",
    "\u000243\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000267\u0003\u0002\u0002\u00027\u0007\u0003\u0002\u0002\u0002",
    "86\u0003\u0002\u0002\u00029<\u0005\n\u0006\u0002:<\u0005\f\u0007\u0002",
    ";9\u0003\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002<\t\u0003\u0002",
    "\u0002\u0002=>\u0007\t\u0002\u0002>?\u0005\u0014\u000b\u0002?@\u0007",
    "\n\u0002\u0002@\u000b\u0003\u0002\u0002\u0002AB\u0007\u000b\u0002\u0002",
    "BC\u0007\u0011\u0002\u0002CD\u0007\f\u0002\u0002DE\u0005\u0014\u000b",
    "\u0002EF\u0007\n\u0002\u0002F\r\u0003\u0002\u0002\u0002GH\u0007\u0011",
    "\u0002\u0002H\u000f\u0003\u0002\u0002\u0002IN\u0005\u0012\n\u0002JK",
    "\u0007\r\u0002\u0002KM\u0005\u0012\n\u0002LJ\u0003\u0002\u0002\u0002",
    "MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002O\u0011\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0007",
    "\u0011\u0002\u0002RS\u0007\u000e\u0002\u0002ST\u0005\u000e\b\u0002T",
    "\u0013\u0003\u0002\u0002\u0002UV\b\u000b\u0001\u0002V\\\u0005\u0018",
    "\r\u0002W\\\u0005\u001a\u000e\u0002X\\\u0005\u0016\f\u0002Y\\\u0005",
    "\u001e\u0010\u0002Z\\\u0005 \u0011\u0002[U\u0003\u0002\u0002\u0002[",
    "W\u0003\u0002\u0002\u0002[X\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002",
    "\u0002[Z\u0003\u0002\u0002\u0002\\c\u0003\u0002\u0002\u0002]^\f\u0006",
    "\u0002\u0002^_\u0005\u001c\u000f\u0002_`\u0005\u0014\u000b\u0007`b\u0003",
    "\u0002\u0002\u0002a]\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002",
    "ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002d\u0015\u0003\u0002",
    "\u0002\u0002ec\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002g\u0017",
    "\u0003\u0002\u0002\u0002hi\u0007\u0011\u0002\u0002ij\u0007\u0004\u0002",
    "\u0002jo\u0005\u0014\u000b\u0002kl\u0007\r\u0002\u0002ln\u0005\u0014",
    "\u000b\u0002mk\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003",
    "\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pr\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002rs\u0007\u0005\u0002\u0002s\u0019\u0003\u0002",
    "\u0002\u0002tu\u0007\u0004\u0002\u0002uv\u0005\u0014\u000b\u0002vw\u0007",
    "\u0005\u0002\u0002w\u001b\u0003\u0002\u0002\u0002xy\u0007\u000f\u0002",
    "\u0002y\u001d\u0003\u0002\u0002\u0002z{\u0007\u0011\u0002\u0002{\u001f",
    "\u0003\u0002\u0002\u0002|}\u0007\u0010\u0002\u0002}!\u0003\u0002\u0002",
    "\u0002\t%6;N[co"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LayoutLangParser extends antlr4.Parser {

    static grammarFileName = "LayoutLang.g4";
    static literalNames = [ null, "'fn'", "'('", "')'", "'->'", "'{'", "'}'", 
                            "'return'", "';'", "'let'", "'='", "','", "':'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "BINARYOP", "INT", 
                             "IDENTIFIER", "WS" ];
    static ruleNames = [ "body", "func", "funcBody", "statement", "returnStatement", 
                         "letStatement", "type", "args", "arg", "expr", 
                         "binaryExpr", "funcCall", "parenExpr", "binaryop", 
                         "identifier", "integer" ];

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
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__0) {
	            this.state = 32;
	            localctx._func = this.func();
	            localctx.functions.push(localctx._func);
	            this.state = 37;
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
	        this.state = 38;
	        this.match(LayoutLangParser.T__0);
	        this.state = 39;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 40;
	        this.match(LayoutLangParser.T__1);
	        this.state = 41;
	        localctx.arguments = this.args();
	        this.state = 42;
	        this.match(LayoutLangParser.T__2);
	        this.state = 43;
	        this.match(LayoutLangParser.T__3);
	        this.state = 44;
	        localctx.type_decl = this.type();
	        this.state = 45;
	        this.match(LayoutLangParser.T__4);
	        this.state = 46;
	        localctx.func_body = this.funcBody();
	        this.state = 47;
	        this.match(LayoutLangParser.T__5);
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
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__6 || _la===LayoutLangParser.T__8) {
	            this.state = 49;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 54;
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
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.returnStatement();
	            break;
	        case LayoutLangParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
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
	        this.state = 59;
	        this.match(LayoutLangParser.T__6);
	        this.state = 60;
	        localctx.expression = this.expr(0);
	        this.state = 61;
	        this.match(LayoutLangParser.T__7);
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
	        this.state = 63;
	        this.match(LayoutLangParser.T__8);
	        this.state = 64;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 65;
	        this.match(LayoutLangParser.T__9);
	        this.state = 66;
	        localctx.expression = this.expr(0);
	        this.state = 67;
	        this.match(LayoutLangParser.T__7);
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
	        this.state = 69;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        localctx._arg = this.arg();
	        localctx.argList.push(localctx._arg);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__10) {
	            this.state = 72;
	            this.match(LayoutLangParser.T__10);
	            this.state = 73;
	            localctx._arg = this.arg();
	            localctx.argList.push(localctx._arg);
	            this.state = 78;
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LayoutLangParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 80;
	        this.match(LayoutLangParser.T__11);
	        this.state = 81;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 84;
	            this.funcCall();
	            break;

	        case 2:
	            this.state = 85;
	            this.parenExpr();
	            break;

	        case 3:
	            this.state = 86;
	            this.binaryExpr();
	            break;

	        case 4:
	            this.state = 87;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 88;
	            this.integer();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LayoutLangParser.RULE_expr);
	                this.state = 91;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 92;
	                this.binaryop();
	                this.state = 93;
	                this.expr(5); 
	            }
	            this.state = 99;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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



	binaryExpr() {
	    let localctx = new BinaryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LayoutLangParser.RULE_binaryExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);

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
	    this.enterRule(localctx, 22, LayoutLangParser.RULE_funcCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        localctx.name = this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 103;
	        this.match(LayoutLangParser.T__1);
	        this.state = 104;
	        localctx._expr = this.expr(0);
	        localctx.argList.push(localctx._expr);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__10) {
	            this.state = 105;
	            this.match(LayoutLangParser.T__10);
	            this.state = 106;
	            localctx._expr = this.expr(0);
	            localctx.argList.push(localctx._expr);
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this.match(LayoutLangParser.T__2);
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
	    this.enterRule(localctx, 24, LayoutLangParser.RULE_parenExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(LayoutLangParser.T__1);
	        this.state = 115;
	        localctx.expression = this.expr(0);
	        this.state = 116;
	        this.match(LayoutLangParser.T__2);
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



	binaryop() {
	    let localctx = new BinaryopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LayoutLangParser.RULE_binaryop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        localctx.op = this.match(LayoutLangParser.BINARYOP);
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
	        this.state = 120;
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
	        this.state = 122;
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


}

LayoutLangParser.EOF = antlr4.Token.EOF;
LayoutLangParser.T__0 = 1;
LayoutLangParser.T__1 = 2;
LayoutLangParser.T__2 = 3;
LayoutLangParser.T__3 = 4;
LayoutLangParser.T__4 = 5;
LayoutLangParser.T__5 = 6;
LayoutLangParser.T__6 = 7;
LayoutLangParser.T__7 = 8;
LayoutLangParser.T__8 = 9;
LayoutLangParser.T__9 = 10;
LayoutLangParser.T__10 = 11;
LayoutLangParser.T__11 = 12;
LayoutLangParser.BINARYOP = 13;
LayoutLangParser.INT = 14;
LayoutLangParser.IDENTIFIER = 15;
LayoutLangParser.WS = 16;

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
LayoutLangParser.RULE_binaryExpr = 10;
LayoutLangParser.RULE_funcCall = 11;
LayoutLangParser.RULE_parenExpr = 12;
LayoutLangParser.RULE_binaryop = 13;
LayoutLangParser.RULE_identifier = 14;
LayoutLangParser.RULE_integer = 15;

export class BodyContext extends antlr4.ParserRuleContext {

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



export class FuncContext extends antlr4.ParserRuleContext {

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



export class FuncBodyContext extends antlr4.ParserRuleContext {

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



export class StatementContext extends antlr4.ParserRuleContext {

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



export class ReturnStatementContext extends antlr4.ParserRuleContext {

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



export class LetStatementContext extends antlr4.ParserRuleContext {

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



export class TypeContext extends antlr4.ParserRuleContext {

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



export class ArgsContext extends antlr4.ParserRuleContext {

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



export class ArgContext extends antlr4.ParserRuleContext {

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



export class ExprContext extends antlr4.ParserRuleContext {

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

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	parenExpr() {
	    return this.getTypedRuleContext(ParenExprContext,0);
	};

	binaryExpr() {
	    return this.getTypedRuleContext(BinaryExprContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
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

	binaryop() {
	    return this.getTypedRuleContext(BinaryopContext,0);
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



export class BinaryExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_binaryExpr;
    }


	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterBinaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitBinaryExpr(this);
		}
	}


}



export class FuncCallContext extends antlr4.ParserRuleContext {

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
        this._expr = null; // ExprContext
        this.argList = []; // of ExprContexts
    }

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
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



export class ParenExprContext extends antlr4.ParserRuleContext {

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



export class BinaryopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LayoutLangParser.RULE_binaryop;
        this.op = null; // Token
    }

	BINARYOP() {
	    return this.getToken(LayoutLangParser.BINARYOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.enterBinaryop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitBinaryop(this);
		}
	}


}



export class IdentifierContext extends antlr4.ParserRuleContext {

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



export class IntegerContext extends antlr4.ParserRuleContext {

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
LayoutLangParser.BinaryExprContext = BinaryExprContext; 
LayoutLangParser.FuncCallContext = FuncCallContext; 
LayoutLangParser.ParenExprContext = ParenExprContext; 
LayoutLangParser.BinaryopContext = BinaryopContext; 
LayoutLangParser.IdentifierContext = IdentifierContext; 
LayoutLangParser.IntegerContext = IntegerContext; 
