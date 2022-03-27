
const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI");

/* document.write(item); */
//[object HTMLLIElement]

/* console.log(item); */
// <li></li> dans la console

const textoDelItem = document.createTextNode("Este es un item de la lista"); //pour créer un text dans l'item

console.log(textoDelItem);
//"Este es un item de la lista" 

//Mettre un node dans un autre node:

/* item.innerHTML = textoDelItem; */
console.log(item);
//<li>[object Text]</li>

item.appendChild(textoDelItem);
//"Este es un item de la lista" dans <li></li>

contenedor.appendChild(item);
//Este es un item de la lista

/* 
const textoDelItem = document.createTextNode("Este es un item de la lista"); 
item.appendChild(textoDelItem); */
// ! On le remplace par:
item.innerHTML = "Este es un item de la lista";

// * Au lieu de:
/* item.innerHTML = "Este es un item de la lista";
item.innerHTML = "Este es un item de la lista";
item.innerHTML = "Este es un item de la lista";
item.innerHTML = "Este es un item de la lista";
item.innerHTML = "Este es un item de la lista"; */
// * On fait:

//1)
  for (i = 0; i < 20; i++) {

    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    contenedor.appendChild(item);

}
 
console.log(item);  

//2)

const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++) {

    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);

}

contenedor.appendChild(fragmento);

console.log(contenedor);










