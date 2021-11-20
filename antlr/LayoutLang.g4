grammar LayoutLang;
body    
        : func*;

func    
        : 'fn' IDENTIFIER '(' args ')' '->' type '{' funcBody '}';

funcBody 
        : statement*;

statement 
        : 'let' IDENTIFIER '=' expr ';'
        | 'return' expr ';';

type    
        : IDENTIFIER;

args    
        : arg*
        ;

arg 
        : IDENTIFIER':'type;

expr    
        : IDENTIFIER
        | INT
        | expr '+' expr
        ;

INT     : [\-]? [0-9]+;
IDENTIFIER : [a-z] [a-z0-9]*;

WS      : [ \t\r\n]+ -> skip;
