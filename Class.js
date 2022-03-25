
const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");
//va devenir grand

/* titulo.classList.remove("grande"); */
//va devenir comme avant

let valor = titulo.classList.item(2);

document.write(valor + "<br>");
//<h1 class="titulo grande rojo circular">Elemento a modificar</h1>
//donc item(2) va donner rojo


let value = titulo.classList.contains("rojo");

document.write(value + "<br>");
//true

nombreDeClase = "rojoo"
valor = titulo.classList.contains(nombreDeClase);


if (valor) {
    document.write(`la clase ${nombreDeClase} existe<br>`);

} else {
    document.write(`la clase ${nombreDeClase} <b>NO</b> existe<br>`);
}

value = titulo.classList.contains("rojo");

document.write(value + "<br>");

titulo.classList.toggle("auto");
//si cette class n'existe pas toggle va l'ajouter

titulo.classList.toggle("grande");
//si elle existe l'élimine

//titulo.classList.toogle("grande", true) -> va toujours le garder
//titulo.classList.toogle("grande", false) -> va toujours l'éliminer

let unValor = titulo.classList.toggle("rojo");

document.write(unValor + "<br>");
//false, car toggle a éliminé la class

let otroValor = titulo.classList.replace("circular", "triangular");
//true, false si elle n'existe pas 

document.write(otroValor + "<br>");