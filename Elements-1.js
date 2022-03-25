
const titulo = document.querySelector(".titulo");

//On a dans index.html:
//<p class="titulo grande rojo circular">Elemento a <b style="visibility: hidden;">Modificar</b></p>

let resultado = titulo.innerText; //archaïque
//Redonnent pas le contenu HTML
//donc seulement: Elemento a

resultado = titulo.textContent;
//Montre tout ça: Elemento a <b style="visibility: hidden;">Modificar</b>
//c'est-à-dire: Elemento a Modificar
//donc montre pas les étiquettes come <b>

document.write(resultado + "<br>");

resultado = titulo.innerHTML;

document.write(resultado + "<br>");
//Elemento a 

let result = titulo.outerHTML;

document.write(result + "<br>");
//Elemento a 

/**  
 * * Si on enlève <b style="visibility: hidden;
 * * alors on aura Elemento a Modificar pour
 * * titulo.innerHTML et titulo.outerHTML
*/

alert(resultado);
//celui-ci montre: Elemento a <b style="visibility: hidden;">Modificar</b>
//avec innerHTML

alert(result);
//celui-ci montre: //l'alert montre: <p class="titulo grande rojo circular">Elemento a <b style="visibility: hidden;">Modificar</b></p>
//avec outerHTML

//Un textContent va juste montrer le "Elemento a Modificar"


/* const titre = document.querySelector(".titre");

let resultat = titulo.textContent;
let resultat1 = titulo.innerHTML;
let resultat2 = titulo.outerHTML;

alert(resultat);
alert(result1);
alert(resultat3); */