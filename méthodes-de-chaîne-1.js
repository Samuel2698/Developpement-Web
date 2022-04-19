let cadena = new String("Cadena de prueba,");
// la même chose que: let cadena = "cadena de prueba,
let cadena2 = " cadena 2. "

resultado = cadena.concat(cadena2);

document.write(resultado);
//cadena de prueba, cadena 2


let cadena3 = "cadena de prueba";
let cadena4 = "cadena";

resultado = cadena3.startsWith(cadena4);

document.write(resultado);
//true

let cadena5 = " cadena de prueba";
let cadena6 = "cadena";

resultado = cadena5.startsWith(cadena6);

document.write(resultado);
//false


let cadena7 = " cadena de prueba";
let cadena8 = "a";


resultado = cadena7.endsWith(cadena8);

document.write(resultado);
//true


let cadena9 = "Follow me on Instagram";
let cadena10 = "on";

resultado = cadena9.includes(cadena10);

document.write(resultado);
//true

let frase1 = "Es verde, alto y con cola";
let frase2 = "";

resultado = frase1.includes("morado");

document.write(resultado);
//false

let frase3 = "Es verde, alto y con cola";
let frase4 = "";

resultado = frase1.includes("verde");

document.write(resultado);
//true


let frase5 = "Es verde, alto y con cola";
let frase6 = "";

resultado = frase5.indexOf("cola");

document.write(resultado);
//21


let frase7 = "Es verde, alto y con cola";
let frase8 = "";

resultado = frase7.indexOf("cola");

document.write(frase7[4]);
//e


let frase9 = "Es verde, alto y con cola cola cola cola cola cola";
let frase10 = "";

resultado = frase9.lastIndexOf("cola");

document.write(resultado);
//46 

let phrase1 = "abc";
let phrase2 = "";

resultado = phrase1.padStart(10,"1");

document.write(resultado);
//1111111abc

let phrase3 = "abc";
let phrase4 = "";

resultado = phrase3.padEnd(4, "z");

document.write(resultado);
//abcz

let phrase5 = "casa";
let phrase6 = "";

resultado = phrase5.repeat(5);

document.write(resultado);
//casacasacasacasacasa
