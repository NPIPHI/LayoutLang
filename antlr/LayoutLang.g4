grammar LayoutLang;
body    
        : func*;

func    
        : 'fn' IDENTIFIER '(' args ')' '->' type '{' funcBody '}';

funcBody 
        : statement*;

statement 
        : returnStatement
        | letStatement
        ;

returnStatement
        : 'return' expr ';';

letStatement
        : 'let' IDENTIFIER '=' expr ';';

type    
        : IDENTIFIER;

args    
        : arg*
        ;

arg 
        : IDENTIFIER':'type;

expr    : expr binaryop expr
        | identifier
        | integer
        ;

binaryop: BINARYOP;
identifier : IDENTIFIER;
integer: INT;

BINARYOP : 
        '+'
        |'-'
        |'*'
        |'/';

INT     : [\-]? [0-9]+;
IDENTIFIER : [a-zA-Z] [a-zA-Z0-9_]*;

WS      : [ \t\r\n]+ -> skip;
