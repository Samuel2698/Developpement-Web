parrafo = document.getElementById("parrafo");
//Sigueme en mi cuenta @""
document.write(parrafo + "<br>");
//[object HTMLParagraphElement]

parrafo = document.getElementsByTagName("p");
document.write(parrafo + "<br>");
//[object HTMLCollection]

parrafito = document.querySelector(".parrafito");
document.write(parrafito + "<br>");
//[object HTMLParagraphElement]

parrafo = document.querySelector("#parrafo");
document.write(parrafo + "<br>"); 
//[object HTMLParagraphElement]
//c'est mieux d'utiliser document.getElementById()

/* parrafito = document.querySelectorAll(".parrafito");
document.write(parrafito);
[object NodeList] */

parrafito = document.querySelectorAll(".parrafito");
document.write(parrafito[3]); 
//[object HTMLParagraphElement]
//parrafito[4] existe pas donc undefined