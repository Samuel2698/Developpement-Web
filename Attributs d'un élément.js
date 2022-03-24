
const rangoEtario = document.querySelector(".rangoEtario");

/* document.write(rangoEtario.getAttribute("type")); */
//Rango de Edad range

valorDelAtributo = rangoEtario.getAttribute("type");

document.write(valorDelAtributo);
//Rango de Edad range 
//Le "range" vient du type, dans ce cas c'est type="range"

valorDelAtributo = rangoEtario.setAttribute("type", "casa");
//Dans la console on a type="casa" et on a plus un input range

valorDelAtributo = rangoEtario.setAttribute("type", "");
//Le type est vide

valorDelAtributo = rangoEtario.removeAttribute("type");
//On a plus de type

