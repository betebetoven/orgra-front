/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
"*"                   return '*';
"/"                   return '/';
"-"                   return '-';
"+"                   return '+';
"^"                   return '^';
"("                   return '(';
")"                   return ')';
";"                   return ';';
","                   return ',';
"set_print_x"         return 'set_print_x';
"set_print_o"         return 'set_print_o';
"set_print_triangulo" return 'set_print_triangulo';
"set_print_estrella"  return 'set_print_estrella';
"cyan"                return 'cyan';
"negro"               return 'negro'
"magenta"             return 'magenta';
"amarillo"            return 'amarillo';
<<EOF>>               return 'EOF';

/lex

/* operator associations and precedence */


%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS
%start expressions

%% /* language grammar */

expressions
    : instrucciones EOF
        {return $1;}
    ;
instrucciones: instrucciones instruccion { $1.push($2); $$ = $1; }
            | instruccion {$$ = [$1];}
            ;

instruccion:
    /*$2 returns a json and $1 returns a string that needs to be added to the json a s a new key liek this "figure": $1*/
    prefijo_comando coordenadas_y_color {$$ = {"figure": $1, ...$2};}
;
prefijo_comando: 
    set_print_x {$$ = "x"}
    | set_print_o {$$ = "o"}
    | set_print_estrella {$$ = "☆"}
    | set_print_triangulo {$$ = "△"}
    ;


coordenadas_y_color: '(' e  ',' e ',' e ')' ';'
    {$$ =  {"row":$2, "col": $4, "color": $6};}
    ;



e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | cyan
        {$$ = "cyan"}
    | negro
        {$$ = "negro"}
    | amarillo
        {$$ = "yellow"}
    | magenta
        {$$ = "magenta"}
    ;

