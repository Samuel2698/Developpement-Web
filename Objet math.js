let numero = Math.sqrt(25);

document.write(numero + "<br>");
//5

numero = Math.cbrt(25);

document.write(numero + "<br>");
//2.924017738212866

numero = Math.max(55,7,88,122,77);

document.write(numero + "<br>");
//122

numero = Math.min(66,-4,-55,8,0);

document.write(numero + "<br>");
//-55

numero = Math.random();

document.write(numero + "<br>");
// on aura un nombre "entre" 0 et 1

numero = Math.random()*100;

document.write(numero + "<br>");
//17.84453648523272
//On aura beaucoup de decimales, on fait donc:

numero = Math.random() * 100;
numero = numero.toLocaleString();
num = numero[0] + numero[1];

if (numero[1] == ",") {
    num = numero[0];
} 

document.write(num + "<br>");
//7

numero = Math.random() * 100;
numero = Math.round(numero);

document.write(numero + "<br>");
//on a pas vraiment un nombre entre 0 et 100

numero = Math.random() * 100;
numero = Math.floor(4.99999999);
//grâce à floor le 0 pourra apparaître

document.write(numero + "<br>");
//4

numero = Math.random() * 99;
numero = Math.floor(numero + 1);

document.write(numero + "<br>");
//on aura effectivement un nombre entre 0 et 100 (de 1 à 99)
//on peut le tester:

/* for (var i = 0; i < 100000; i++) {

    let numero = Math.random() * 99;
    numero = Math.floor(numero + 1);   
    
    document.write(numero + "<br>");
} */

/* for (var i = 0; i < 10000; i++) {

    let numero = Math.random()*100
    numero = Math.floor(numero + 1);

    document.write(numero + "<br>");
}
 */ //de 1 à 100

numero = Math.trunc(6.666);

document.write(numero + "<br>");
//6

numero = Math.PI;
//on a aussi: E, LN2, SQRT2, etc

document.write(numero + "<br>");
//3.141592653589793
