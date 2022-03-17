
class Animal {

    constructor(espece, age, couleur) {

        this.esp = espece;
        this.age = age;
        this.cl = couleur;
        this.info = `J'suis un(une) ${espece}, j'ai ${age} ans et j'ai une couleur ${couleur}`;
    }
    voirInfo() {
        document.write(this.info + "<br>")
    }
}

class Chien extends Animal { 
    //On peut pas avoir un objet avec le même nom que la class
    constructor(espece, age, couleur, race) {
        super(espece, age, couleur);
        this.race = race
    }
    aboyer() {
        alert("Ouaf!");
    }
}


const chien = new Chien("chien", 5, "marron", "Golden");
const chat = new Animal("chat", 2, "noir");
const oiseau = new Animal("oiseau", 1, "vert");

chien.aboyer();
chat.aboyer();
