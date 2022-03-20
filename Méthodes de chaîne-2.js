let cadena0 = "Hola qué tal?";

resultado = cadena0.split(" ");

document.write(resultado);
//Hola,qué,tal?

let cadena1 = "Hola qué tal?";

resultado = cadena1.split(" ");

document.write(resultado[2]);
//tal

let cadena2 = "Hola qué tal?";

resultado = cadena2.split("qué");

document.write(resultado);
//Hola , tal?

let cadena3 = "ABCDEFG";

resultado = cadena3.substring(0, 2);

document.write(resultado);
//AB

let cadena4 = "ABCDEFG";

resultado = cadena4.toLocaleLowerCase();

document.write(resultado);
//abcdefg

let cadena5 = "no puede ser";

resultado = cadena5.toLocaleUpperCase();

document.write(resultado);
//NO PUEDE SER

let cadena6 = 666;

resultado = cadena6.toLocaleString();

document.write(resultado * 2);
//1332

//Mais:

let cadena7 = 7;

resultado = cadena7.toLocaleString();

document.write(2 + resultado);
//27

let chaîne = ["Hugo", "Roman"];

resultado = chaîne.toString();

document.write(resultado[2]);
//g car c'est plus un array

let chaîne2 = "ABCDEF";

resultado = chaîne2.substring(1, 3);

document.write(resultado);
//BC

let chaîne3 = "     Pedro       ";

resultado = chaîne3;

document.write(resultado.length);
//17

let chaîne4 = "Pedro";

resultado = chaîne4;

document.write(resultado.length);
//5

let chaîne5 = "    Sam      ";

resultado = chaîne5.trim(); //pour effacer les espaces

document.write(resultado.length);
//3

/**
 * *trimEnd() efface les espaces de la fin
 * *trimStart() efface les espaces du début
 * *trim() pour les deux
*/




