/*  
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
        this.race = race;
    }
    static aboyer() {  
        alert("Ouaf!");
    }
}


const chat = new Animal("chat", 2, "noir");
const oiseau = new Animal("oiseau", 1, "vert");

Chien.aboyer();
//On a pas créé l'objet "chien" avec static, donc Chien.aboyer() c'est une sorte de class temporaire
chat.aboyer();*/


/* 
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
    
    constructor(espece, age, couleur, race) {
        super(espece, age, couleur);
        this.race = null;
    }
    modifierLaRace() {
        this.race = "Labrador";
    }
    
}

const chien = new Chien("chien", 5, "marron", "Golden");
const chat = new Animal("chat", 2, "noir");
const oiseau = new Animal("oiseau", 1, "vert");

chien.modifierLaRace();
document.write(chien.race);
  */


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
    
    constructor(espece, age, couleur, race) {
        super(espece, age, couleur);
        this.race = null;
    }
    set setRace(newName) { //On modifie une valeur
        this.race = newName;
    }

    get getRace() { //On obtient une valeur
        return this.race;
    }
}

const chien = new Chien("chien", 5, "marron", "Golden");
const chat = new Animal("chat", 2, "noir");
const oiseau = new Animal("oiseau", 1, "vert");

chien.setRace = "Labrador";

document.write(chien.getRace);