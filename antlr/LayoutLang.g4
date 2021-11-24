grammar LayoutLang;
body    
        : functions+=func*;

func    
        : 'fn' name=IDENTIFIER '(' arguments=args ')' '->' type_decl=type '{' func_body=funcBody '}';

funcBody 
        : statements+=statement*;

statement 
        : returnStatement
        | letStatement
        ;

returnStatement
        : 'return' expression=expr ';';

letStatement
        : 'let' name=IDENTIFIER '=' expression=expr ';';

type    
        : IDENTIFIER;

args    :
        | argList+=arg (',' argList+=arg)*
        ;

arg 
        : name=IDENTIFIER':'type_decl=type;

expr    : ifExpr
        | funcCall
        | parenExpr
        | expr binaryop expr
        | identifier
        | integer
        ;

exprList : 
        | argList+=expr (',' argList+=expr)*
        ;

ifExpr: 'if' '(' pred=expr ')' '{' then_body=funcBody '}' 'else' '{' else_body=funcBody '}';
funcCall: name=IDENTIFIER '(' argList=exprList ')';
parenExpr: '(' expression=expr ')';
binaryop: op=BINARYOP;
identifier : name=IDENTIFIER;
integer: value=INT;

BINARYOP : 
         '+'|'-'|'*'|'/'|'%'|'>'|'<'|'>='|'<='|'||'|'&&'|'=='|'!='|'<<'|'>>';

INT     : [\-]? [0-9]+;
IDENTIFIER : [a-zA-Z] [a-zA-Z0-9_]*;

WS      : [ \t\r\n]+ -> skip;
