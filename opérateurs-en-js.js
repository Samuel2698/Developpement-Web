let numero = 10;

numero += 5; /**J'additionne 5 */
numero -= 6;
numero *= 2;
numero /= 3;
numero += 4; /**Ici on a comme résultat numero = 10; */
numero %= 6; /**Donne comme résultat le reste de la division */
numero **=2; /**Pour calculer l'exposant, on a 16*/

/** On peut aussi écrire:
 * *numero = numero + 5;
 */

document.write(numero); /**Pour écrire dans la page */
/** 
 * !ça marche pas si on écrit par exemple let numero += 5;
*/

/* numero1 = 10;

numero2 = 5;

resultado = numero1 + numero2;

alert(resultado); */



numero1 = 10;
numero2 = 5;
numero1--; /**pour soustraire -1 */

alert(numero1); /**On a 9 */

num1 = 20;
num2 = 15;

num2--;

result = num2;

alert(result); /**On a 14 */

numero3 = 10;
numero4 = 5;

resultado2 = numero3 / numero4;
alert(resultado2) /**On a 2 */
/* 
chiffre1 = 10;

chiffre2 = 5;

resultat = chiffre1**2; 

alert(resultat); */

chiffre1 = 10;

chiffre2 = 5;

resultat = chiffre1**chiffre2; /**Comme si c'était chiffre1**5 */

alert(resultat);

chiffre3 = 3;

chiffre4 = 5;

chiffre3++; /**là c'est égale à 4 */

resultat = chiffre3; 

alert(resultat);

numero1 = 10;

numero2 = 5;

resultado = numero1 & numero2; /**On a le reste, donc 0 */

alert(resultado);

numero1 = 10;

numero2 = 5;

resultado = -numero1;

alert(resultado); /**On a donc -10 */

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
