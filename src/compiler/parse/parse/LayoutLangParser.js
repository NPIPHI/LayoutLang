// Generated from LayoutLang.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import LayoutLangListener from './LayoutLangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0011b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e\n\u0002",
    "\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0007\u0004/\n\u0004\f\u0004\u000e",
    "\u00042\u000b\u0004\u0003\u0005\u0003\u0005\u0005\u00056\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0007",
    "\tE\n\t\f\t\u000e\tH\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000bQ\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000bW\n\u000b\f\u000b\u000e\u000bZ\u000b",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0002\u0003\u0014\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u0002\u0002\u0002Z\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u00060\u0003\u0002\u0002",
    "\u0002\b5\u0003\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\f;\u0003",
    "\u0002\u0002\u0002\u000eA\u0003\u0002\u0002\u0002\u0010F\u0003\u0002",
    "\u0002\u0002\u0012I\u0003\u0002\u0002\u0002\u0014P\u0003\u0002\u0002",
    "\u0002\u0016[\u0003\u0002\u0002\u0002\u0018]\u0003\u0002\u0002\u0002",
    "\u001a_\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002",
    "\u001d\u001c\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002",
    " \u0003\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\"#\u0007",
    "\u0003\u0002\u0002#$\u0007\u0010\u0002\u0002$%\u0007\u0004\u0002\u0002",
    "%&\u0005\u0010\t\u0002&\'\u0007\u0005\u0002\u0002\'(\u0007\u0006\u0002",
    "\u0002()\u0005\u000e\b\u0002)*\u0007\u0007\u0002\u0002*+\u0005\u0006",
    "\u0004\u0002+,\u0007\b\u0002\u0002,\u0005\u0003\u0002\u0002\u0002-/",
    "\u0005\b\u0005\u0002.-\u0003\u0002\u0002\u0002/2\u0003\u0002\u0002\u0002",
    "0.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021\u0007\u0003\u0002",
    "\u0002\u000220\u0003\u0002\u0002\u000236\u0005\n\u0006\u000246\u0005",
    "\f\u0007\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002\u00026",
    "\t\u0003\u0002\u0002\u000278\u0007\t\u0002\u000289\u0005\u0014\u000b",
    "\u00029:\u0007\n\u0002\u0002:\u000b\u0003\u0002\u0002\u0002;<\u0007",
    "\u000b\u0002\u0002<=\u0007\u0010\u0002\u0002=>\u0007\f\u0002\u0002>",
    "?\u0005\u0014\u000b\u0002?@\u0007\n\u0002\u0002@\r\u0003\u0002\u0002",
    "\u0002AB\u0007\u0010\u0002\u0002B\u000f\u0003\u0002\u0002\u0002CE\u0005",
    "\u0012\n\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002F",
    "D\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\u0011\u0003\u0002",
    "\u0002\u0002HF\u0003\u0002\u0002\u0002IJ\u0007\u0010\u0002\u0002JK\u0007",
    "\r\u0002\u0002KL\u0005\u000e\b\u0002L\u0013\u0003\u0002\u0002\u0002",
    "MN\b\u000b\u0001\u0002NQ\u0005\u0018\r\u0002OQ\u0005\u001a\u000e\u0002",
    "PM\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002QX\u0003\u0002\u0002",
    "\u0002RS\f\u0005\u0002\u0002ST\u0005\u0016\f\u0002TU\u0005\u0014\u000b",
    "\u0006UW\u0003\u0002\u0002\u0002VR\u0003\u0002\u0002\u0002WZ\u0003\u0002",
    "\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u0015",
    "\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0007\u000e\u0002",
    "\u0002\\\u0017\u0003\u0002\u0002\u0002]^\u0007\u0010\u0002\u0002^\u0019",
    "\u0003\u0002\u0002\u0002_`\u0007\u000f\u0002\u0002`\u001b\u0003\u0002",
    "\u0002\u0002\b\u001f05FPX"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LayoutLangParser extends antlr4.Parser {

    static grammarFileName = "LayoutLang.g4";
    static literalNames = [ null, "'fn'", "'('", "')'", "'->'", "'{'", "'}'", 
                            "'return'", "';'", "'let'", "'='", "':'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "BINARYOP", "INT", 
                             "IDENTIFIER", "WS" ];
    static ruleNames = [ "body", "func", "funcBody", "statement", "returnStatement", 
                         "letStatement", "type", "args", "arg", "expr", 
                         "binaryop", "identifier", "integer" ];

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
    			return this.precpred(this._ctx, 3);
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
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__0) {
	            this.state = 26;
	            this.func();
	            this.state = 31;
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
	        this.state = 32;
	        this.match(LayoutLangParser.T__0);
	        this.state = 33;
	        this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 34;
	        this.match(LayoutLangParser.T__1);
	        this.state = 35;
	        this.args();
	        this.state = 36;
	        this.match(LayoutLangParser.T__2);
	        this.state = 37;
	        this.match(LayoutLangParser.T__3);
	        this.state = 38;
	        this.type();
	        this.state = 39;
	        this.match(LayoutLangParser.T__4);
	        this.state = 40;
	        this.funcBody();
	        this.state = 41;
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__6 || _la===LayoutLangParser.T__8) {
	            this.state = 43;
	            this.statement();
	            this.state = 48;
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.returnStatement();
	            break;
	        case LayoutLangParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
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
	        this.state = 53;
	        this.match(LayoutLangParser.T__6);
	        this.state = 54;
	        this.expr(0);
	        this.state = 55;
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
	        this.state = 57;
	        this.match(LayoutLangParser.T__8);
	        this.state = 58;
	        this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 59;
	        this.match(LayoutLangParser.T__9);
	        this.state = 60;
	        this.expr(0);
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LayoutLangParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.IDENTIFIER) {
	            this.state = 65;
	            this.arg();
	            this.state = 70;
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
	        this.state = 71;
	        this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 72;
	        this.match(LayoutLangParser.T__10);
	        this.state = 73;
	        this.type();
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
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.IDENTIFIER:
	            this.state = 76;
	            this.identifier();
	            break;
	        case LayoutLangParser.INT:
	            this.state = 77;
	            this.integer();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
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
	                this.state = 80;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 81;
	                this.binaryop();
	                this.state = 82;
	                this.expr(4); 
	            }
	            this.state = 88;
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



	binaryop() {
	    let localctx = new BinaryopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LayoutLangParser.RULE_binaryop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(LayoutLangParser.BINARYOP);
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
	    this.enterRule(localctx, 22, LayoutLangParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LayoutLangParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(LayoutLangParser.INT);
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
LayoutLangParser.BINARYOP = 12;
LayoutLangParser.INT = 13;
LayoutLangParser.IDENTIFIER = 14;
LayoutLangParser.WS = 15;

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
LayoutLangParser.RULE_binaryop = 10;
LayoutLangParser.RULE_identifier = 11;
LayoutLangParser.RULE_integer = 12;

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
LayoutLangParser.BinaryopContext = BinaryopContext; 
LayoutLangParser.IdentifierContext = IdentifierContext; 
LayoutLangParser.IntegerContext = IntegerContext; 
