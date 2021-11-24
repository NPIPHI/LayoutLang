grammar LayoutLang;
body    
        : functions+=func*;

func    
        : FUNCTION name=IDENTIFIER LEFTPAREN arguments=args RIGHTPAREN ARROW type_decl=type LEFTCURLY func_body=funcBody RIGHTCURLY;

funcBody 
        : statements+=statement*;

statement 
        : returnStatement
        | letStatement
        ;

returnStatement
        : RETURN expression=expr SEMICOLON;

letStatement
        : LET name=IDENTIFIER EQ expression=expr SEMICOLON;

type    
        : IDENTIFIER;

args    :
        | argList+=arg (COMMA argList+=arg)*
        ;

arg 
        : name=IDENTIFIER COLON type_decl=type;

expr    
        : ifExpr
        | funcCall
        | parenExpr
        | MINUS expr
        | expr BINARYOP0 expr
        | expr (BINARYOP1 | MINUS) expr
        | expr BINARYOP2 expr
        | expr BINARYOP3 expr
        | expr BINARYOP4 expr
        | expr BINARYOP5 expr
        | expr BINARYOP6 expr
        | integer
        | identifier
        | floatVal
        ;


exprList : 
        | argList+=expr (COMMA argList+=expr)*
        ;

ifExpr: IF LEFTPAREN pred=expr RIGHTPAREN LEFTCURLY then_body=funcBody RIGHTCURLY ELSE LEFTCURLY else_body=funcBody RIGHTCURLY;
funcCall: name=IDENTIFIER LEFTPAREN argList=exprList RIGHTPAREN;
parenExpr: LEFTPAREN expression=expr RIGHTPAREN;
identifier : name=IDENTIFIER;
integer: value=INT;
floatVal: value=FLOAT;


MINUS : '-';
BINARYOP0 : '*'|'/'|'%';
BINARYOP1 : '+';
BINARYOP2 : '<<'|'>>';
BINARYOP3 : '=='|'!=';
BINARYOP4 : '<='|'>='|'<'|'>';
BINARYOP5 : '&&';
BINARYOP6 : '|';
ARROW : '->';
FUNCTION : 'fn';
SEMICOLON : ';';
EQ : '=';
LET : 'let';
RETURN : 'return';
COLON : ':';
COMMA : ',';
IF : 'if';
ELSE : 'else';
LEFTPAREN : '(';
RIGHTPAREN : ')';
LEFTCURLY : '{';
RIGHTCURLY : '}';
INT     : [0-9]+;
FLOAT : [0-9]*'.'[0-9]+;
IDENTIFIER : [a-zA-Z] [a-zA-Z0-9_]*;

WS      : [ \t\r\n]+ -> skip;
