
const input = document.querySelector(".input-normal");


document.write(input.className + "<br><br>");

document.write(input.value + "<br><br>");
//Le value est la valeur dans l'input
//Ex:  value="123"

document.write(input.type = "number");
//le type devient number

input.accept = "image/gif";

input.setAttribute("minlength", "5");

input.placeholder = "QLOQ"

input.required = " ";

const titulo = document.querySelector(".titulo");

titulo.style.color = "#a22";
//une sorte de rouge

titulo.style.backgroundColor = "#32b";
