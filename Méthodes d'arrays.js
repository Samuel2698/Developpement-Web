let prenoms = ["Pedro", "Alejandra", "Jorge"];

document.write(prenoms + "<br>");

let resultat = prenoms.pop();

document.write(resultat + "<br>");

document.write(prenoms + "<br>");
/**
Pedro,Alejandra,Jorge
Jorge
Pedro,Alejandra
 */

//shift() élimine le premier, pas le dernier comme pop()
//Par exemple:

let nombres = ["Pedro ", "Alejandra ", "Jorge"];

document.write("Array original: <b>" + nombres + "</b><br>");

let resultado = nombres.shift();

document.write("Elemento removido: <b style='color:red'>" + resultado + "</b><br>");

document.write("Resultado: <b>" + nombres + "</b><br>");
/**
Pedro,Alejandra,Jorge
Pedro
Alejandra,Jorge
 */

let names = ["Pedro", "Alejandra", "Jorge"];

document.write(names + "<br>");

let result = names.push("Juancito", "Robert" + "<br>");

document.write(names + "<br>");
/**
Pedro,Alejandra,Jorge
Pedro,Alejandra,Jorge,Juancito,Robert
 */

let numeros = [1, 2, 3, 4, 5];

document.write(numeros + "<br>");

resultado = numeros.reverse();

document.write(resultado + "<br>");
/**
1,2,3,4,5
5,4,3,2,1
 */

let numeros2  = [1, 2, 3, 4, 5];

document.write(numeros2 + "<br>");

resultado = numeros2.unshift(-1, 0, 1);

document.write(numeros2 + "<br>");
//-1,0,1,1,2,3,4,5


let numeros3  = [5, 88, -6, -44, 98];

document.write(numeros3 + "<br>");

resultado = numeros3.sort();

document.write(resultado + "<br>");
/**
5,88,-6,-44,98
-44,-6,5,88,98
 */

let palabras = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

palabras.splice(1,3);

document.write(palabras + "<br>");
//casa,conejo,lobo,parque
//car commence à éliminer de 1 à 3

let palabras2 = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

palabras2.splice(1, 3, "Reemplazo");

document.write(palabras2 + "<br>");
//casa,Reemplazo,conejo,lobo,parque

let palabras3 = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

palabras3.splice(0, 0, "Reemplazo1", "Reemplazo2");

document.write(palabras3 + "<br>");

//Reemplazo1,Reemplazo2,casa,lapiz,tele,radio,conejo,lobo,parque

let lista = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

lista.splice(-1, 0, "Reemplazo1", "Reemplazo2");

document.write(lista + "<br>");
//casa,lapiz,tele,radio,conejo,lobo,Reemplazo1,Reemplazo2,parque

let lista2 = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

lista2.splice(-1, 1, "Reemplazo1", "Reemplazo2", "parque");

document.write(lista2 + "<br>");
//casa,lapiz,tele,radio,conejo,lobo,Reemplazo1,Reemplazo2,parque

let list = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

document.write(list + "<br>");

result = list.join();

document.write(result[2] + "<br>");
/**
casa,lapiz,tele,radio,conejo,lobo,parque
s
* ! on a eu "s" car avec join() on a plus un array mais une chaîne de texte
 */

let list2 = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

document.write(list2 + "<br>");

result = list2.join(" - ");

document.write(result + "<br>");
//casa - lapiz - tele - radio - conejo - lobo - parque

let list3 = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

document.write(list3 + "<br>");

result = list3.join("<br>elemento: ");

document.write("Elemento: " + result + "<br>");
/**
Elemento: casa
elemento: lapiz
elemento: tele
elemento: radio
elemento: conejo
elemento: lobo
elemento: parque
 */
let liste = ["casa", "lapiz", "tele", "radio", "conejo", "lobo", "parque"];

document.write(liste + "<br>");

resultat = liste.slice(0, 4); //donc va montrer les 5 premiers éléments
//resultat = liste.slice(0, -2); le -2 pour enlever de droite à gauche
//pour tout montrer: liste.slice(0);

document.write(resultat + "<br>");
//casa,lapiz,tele,radio

let mots = ["pain", "confiture", "beurre", "sel", "lait", "oeufs", "fromage"];

mots.filter(mots => document.write(mots + "<br>"));
//filter() et forEach() ont les mêmes fonctionnalités
/**
pain
confiture
beurre
sel
lait
oeufs
fromage
 */

let words = ["pain", "confiture", "beurre", "sel", "lait", "oeufs", "fromage"];

result = words.filter(words => words.length > 4);

document.write(result + "<br>");
//confiture,beurre,oeufs,fromage

let bangou = ["ichi", "ni", "san", "yon", "go", "roku", "nana"];

result = bangou.filter(bangou => bangou.length < 3);

document.write(result);
//ni,go
//forEach ne peut pas faire tout ça