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
