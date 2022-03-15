
let free = false;

const validarCliente = time => {

    let edad = prompt("Qué edad tienes?")
    if (edad > 18){

        if (time >= 2 && time < 7 && !free) { //* free == false est !free
            alert("puedes pasar gratis, eres la primera persona antes de las 2 a.m. papu");
            free = true;

        } else {
            alert(`son las ${time}:00Hs y puedes pasar pero pagando`);
        }

    } else {
        alert("no puedes pasar, largo")
    }
}

validarCliente(23);
validarCliente(0);
validarCliente(0.2);
validarCliente(0.3);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
 