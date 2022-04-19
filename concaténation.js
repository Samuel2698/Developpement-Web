salutation = "Bonjour Hugo, ";
question = "ça va? ";

phrase = salutation + question;

document.write(phrase);

numero1 = 5;
numero2 = 8;

frase = numero1 + numero2;

document.write(frase); /**ça donne 13 */

numero1 = 5;
numero2 = 8;

frase = "" + numero1 + numero2;

document.write(frase); /**ça donne 58 */

numero1 = "5";
numero2 = "8";

frase = numero1 + numero2;

document.write(frase); /**ça donne aussi 58 */

numero1 = "53";
numero2 = 8;

frase = numero1.concat(numero2); /**un doit y avoir un string pour utiliser la fonction concat */

document.write(frase); /**ça donne aussi 538 */


nombre = "Samuel Velasco";

frase = " Soy " + nombre + " y estoy caminando.";

document.write(frase); /**Il y a une meilleure manière de le faire */

/* 
nombre = "Samuel Velasco";

frase = `Soy ${nombre} y estoy caminando`;

document.write(frase); */

nombre = "Samuel Velasco";

phrase = ` Soy ${nombre}
<div>
	<h1>Titre</h1>
	<h2>Sous-titre</h2>
</div>`;
/*On peut sauter les lignes grâce à ${}*/

document.write(phrase);

nombre = "Max Power";

/* frase = "My name is 'Max Power' and I'm the beast"; */
frase = 'My name is "Max Power" and I am the beast';

document.write(frase);
