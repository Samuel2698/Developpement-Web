
class animal {

    constructor(espece, age, couleur) {

        this.esp = espece;
        this.age = age;
        this.cl = couleur;
        this.info = `J'suis un(une) ${espece}, j'ai ${age} ans et j'ai une couleur ${couleur}`;
    }
    voirInfo() {
        document.write(this.info + "<br>")
    }
    aboyer() {

        if (this.esp == "chien") {
            document.write("Ouaf! <br>");

        } else {
            document.write("C'est animal ne peut pas aboyer, car c'est un " + this.esp + "<br>")
        }
    }
}

const chien = new animal("chien", 5, "marron");
const chat = new animal("chat", 2, "noir");
const oiseau = new animal("oiseau", 1, "vert");

/* 
document.write(chien.info + "<br>");
document.write(chat.info + "<br>");
document.write(oiseau.info + "<br>"); */
/* 
chien.voirInfo();
chat.voirInfo();
oiseau.voirInfo(); */

chien.aboyer();
chat.aboyer();
oiseau.aboyer();