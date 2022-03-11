let numero = 23;
let numero2 = 13;

document.write(numero == numero2); /**j'aurai 'false' */

let numero3 = 23;
let numero4 = 23;

document.write(numero3 == numero4); /**j'aurai 'true' */

let numero5 = 23;
let numero6 = 13;
let texto1 = "texto 1";
let texto2 = "texto 2";

document.write(texto1 != texto2); /**j'aurai 'true' */

let texto = "5";
let cifra = 5;

document.write(texto == cifra); /**true */

let text = "4"; /** == demande seulement si la valeur est la même */
let number = 4;

document.write(text === number);
/**false
 * *car === demande si la valeur ET le type de donné sont les mêmes  
 */

let nombre = 34;
let mot = "34";

document.write(nombre != mot); /**false */

document.write(nombre !== mot); /**true */

let nombre1 = 54;
let nombre2 = 78;

document.write(nombre < nombre2); /**true */

let valor = true;
let valor2 = true;

/* let resultado = valor && valor2;

let resultado2 = valor || valor2;

let resultado3 = !valor;
 */
/* 
document.write(resultado);

document.write(resultado2);

document.write(resultado3);
 */

num1 = 1;
num2 = 2;

afirmacion1 = num1 > num2;
afirmacion2 = number == num2;

/* document.write(afirmacion1 && afirmacion2); */
document.write(afirmacion1 || afirmacion2); //false

num12 = 12;
num24 = 24;
num91 = 91;

op = (num1 < num2 || num2 < num12) && (!(num1 != num2) && num91 !=num12);

document.write(op); //false



