// Generated from LayoutLang.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import LayoutLangListener from './LayoutLangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0011O\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0007\u0002\u0014\n\u0002\f\u0002",
    "\u000e\u0002\u0017\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0007\u0004%\n\u0004\f\u0004\u000e\u0004",
    "(\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u00054\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0007\u00079\n\u0007",
    "\f\u0007\u000e\u0007<\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0005\tE\n\t\u0003\t\u0003\t\u0003\t\u0007\tJ\n\t",
    "\f\t\u000e\tM\u000b\t\u0003\t\u0002\u0003\u0010\n\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0002\u0002\u0002L\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006&\u0003\u0002\u0002",
    "\u0002\b3\u0003\u0002\u0002\u0002\n5\u0003\u0002\u0002\u0002\f:\u0003",
    "\u0002\u0002\u0002\u000e=\u0003\u0002\u0002\u0002\u0010D\u0003\u0002",
    "\u0002\u0002\u0012\u0014\u0005\u0004\u0003\u0002\u0013\u0012\u0003\u0002",
    "\u0002\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0013\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0003\u0003\u0002",
    "\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0018\u0019\u0007\u0003",
    "\u0002\u0002\u0019\u001a\u0007\u0010\u0002\u0002\u001a\u001b\u0007\u0004",
    "\u0002\u0002\u001b\u001c\u0005\f\u0007\u0002\u001c\u001d\u0007\u0005",
    "\u0002\u0002\u001d\u001e\u0007\u0006\u0002\u0002\u001e\u001f\u0005\n",
    "\u0006\u0002\u001f \u0007\u0007\u0002\u0002 !\u0005\u0006\u0004\u0002",
    "!\"\u0007\b\u0002\u0002\"\u0005\u0003\u0002\u0002\u0002#%\u0005\b\u0005",
    "\u0002$#\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002",
    "\u0002\u0002&\'\u0003\u0002\u0002\u0002\'\u0007\u0003\u0002\u0002\u0002",
    "(&\u0003\u0002\u0002\u0002)*\u0007\t\u0002\u0002*+\u0007\u0010\u0002",
    "\u0002+,\u0007\n\u0002\u0002,-\u0005\u0010\t\u0002-.\u0007\u000b\u0002",
    "\u0002.4\u0003\u0002\u0002\u0002/0\u0007\f\u0002\u000201\u0005\u0010",
    "\t\u000212\u0007\u000b\u0002\u000224\u0003\u0002\u0002\u00023)\u0003",
    "\u0002\u0002\u00023/\u0003\u0002\u0002\u00024\t\u0003\u0002\u0002\u0002",
    "56\u0007\u0010\u0002\u00026\u000b\u0003\u0002\u0002\u000279\u0005\u000e",
    "\b\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;\r\u0003\u0002\u0002\u0002",
    "<:\u0003\u0002\u0002\u0002=>\u0007\u0010\u0002\u0002>?\u0007\r\u0002",
    "\u0002?@\u0005\n\u0006\u0002@\u000f\u0003\u0002\u0002\u0002AB\b\t\u0001",
    "\u0002BE\u0007\u0010\u0002\u0002CE\u0007\u000f\u0002\u0002DA\u0003\u0002",
    "\u0002\u0002DC\u0003\u0002\u0002\u0002EK\u0003\u0002\u0002\u0002FG\f",
    "\u0003\u0002\u0002GH\u0007\u000e\u0002\u0002HJ\u0005\u0010\t\u0004I",
    "F\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002KL\u0003\u0002\u0002\u0002L\u0011\u0003\u0002\u0002\u0002MK\u0003",
    "\u0002\u0002\u0002\b\u0015&3:DK"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LayoutLangParser extends antlr4.Parser {

    static grammarFileName = "LayoutLang.g4";
    static literalNames = [ null, "'fn'", "'('", "')'", "'->'", "'{'", "'}'", 
                            "'let'", "'='", "';'", "'return'", "':'", "'+'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "INT", "IDENTIFIER", 
                             "WS" ];
    static ruleNames = [ "body", "func", "funcBody", "statement", "type", 
                         "args", "arg", "expr" ];

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
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
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
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__0) {
	            this.state = 16;
	            this.func();
	            this.state = 21;
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
	        this.state = 22;
	        this.match(LayoutLangParser.T__0);
	        this.state = 23;
	        this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 24;
	        this.match(LayoutLangParser.T__1);
	        this.state = 25;
	        this.args();
	        this.state = 26;
	        this.match(LayoutLangParser.T__2);
	        this.state = 27;
	        this.match(LayoutLangParser.T__3);
	        this.state = 28;
	        this.type();
	        this.state = 29;
	        this.match(LayoutLangParser.T__4);
	        this.state = 30;
	        this.funcBody();
	        this.state = 31;
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.T__6 || _la===LayoutLangParser.T__9) {
	            this.state = 33;
	            this.statement();
	            this.state = 38;
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
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(LayoutLangParser.T__6);
	            this.state = 40;
	            this.match(LayoutLangParser.IDENTIFIER);
	            this.state = 41;
	            this.match(LayoutLangParser.T__7);
	            this.state = 42;
	            this.expr(0);
	            this.state = 43;
	            this.match(LayoutLangParser.T__8);
	            break;
	        case LayoutLangParser.T__9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(LayoutLangParser.T__9);
	            this.state = 46;
	            this.expr(0);
	            this.state = 47;
	            this.match(LayoutLangParser.T__8);
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LayoutLangParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
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
	    this.enterRule(localctx, 10, LayoutLangParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LayoutLangParser.IDENTIFIER) {
	            this.state = 53;
	            this.arg();
	            this.state = 58;
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
	    this.enterRule(localctx, 12, LayoutLangParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(LayoutLangParser.IDENTIFIER);
	        this.state = 60;
	        this.match(LayoutLangParser.T__10);
	        this.state = 61;
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
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, LayoutLangParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LayoutLangParser.IDENTIFIER:
	            this.state = 64;
	            this.match(LayoutLangParser.IDENTIFIER);
	            break;
	        case LayoutLangParser.INT:
	            this.state = 65;
	            this.match(LayoutLangParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 73;
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
	                this.state = 68;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 69;
	                this.match(LayoutLangParser.T__11);
	                this.state = 70;
	                this.expr(2); 
	            }
	            this.state = 75;
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
LayoutLangParser.INT = 13;
LayoutLangParser.IDENTIFIER = 14;
LayoutLangParser.WS = 15;

LayoutLangParser.RULE_body = 0;
LayoutLangParser.RULE_func = 1;
LayoutLangParser.RULE_funcBody = 2;
LayoutLangParser.RULE_statement = 3;
LayoutLangParser.RULE_type = 4;
LayoutLangParser.RULE_args = 5;
LayoutLangParser.RULE_arg = 6;
LayoutLangParser.RULE_expr = 7;

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

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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

	IDENTIFIER() {
	    return this.getToken(LayoutLangParser.IDENTIFIER, 0);
	};

	INT() {
	    return this.getToken(LayoutLangParser.INT, 0);
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
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LayoutLangListener ) {
	        listener.exitExpr(this);
		}
	}


}




LayoutLangParser.BodyContext = BodyContext; 
LayoutLangParser.FuncContext = FuncContext; 
LayoutLangParser.FuncBodyContext = FuncBodyContext; 
LayoutLangParser.StatementContext = StatementContext; 
LayoutLangParser.TypeContext = TypeContext; 
LayoutLangParser.ArgsContext = ArgsContext; 
LayoutLangParser.ArgContext = ArgContext; 
LayoutLangParser.ExprContext = ExprContext; 
