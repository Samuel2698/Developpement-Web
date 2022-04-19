let ordi = {
    nom: "SamuelOrdi",
    processeur: "AMDA Ryzen 5",
    ram: "16",
    espace: "1TB",
};

ordinateur2 = ["SamuelOrdi", "AMDA Ryzen 5", "16", "1TB"];

/* document.write(ordinateur2[3]); 
document.write(ordinateur1["nom"]);
document.write(ordinateur1["ram"]);  */

let nom = ordi["nom"];
let processeur = ordi["processeur"];
let ram = ordi["ram"];
let espace = ordi["espace"];

phrase = `Le nom de mon ordi est: <b>${nom}</b> <br>
          Le processeur est: <b>${processeur}</b> <br>
          La memoire ram a: <b>${ram}</b> <br>
          L'espace du disque a: <b>${espace}</b>`;

document.write(phrase);


