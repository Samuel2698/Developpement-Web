// *Organiser les activités du quotidien
// *Utiliser la console pour tout organiser
// !Le temps par tâche ne doit pas dépaser les 4 heures

// *Minutes:
//30 tâches ménagères
//100 travaux pratiques
//10 repos
//100 étudier
//240 travailler

let travail = "240 minutes de travail";
let études = "100 minutes d'étude";
let tp = "100 minutes de travaux pratiques";
let homework = "30 minutes tâches ménagères";
let repos = "10 minutes de repos";

console.log("ACTIVITES");

for (var i = 0; i < 14; i++) {

    if (i == 0) {
        console.group("semana 1");
    }

    console.groupCollapsed("Jour " + (i+1));
    console.log(travail);
    console.log(repos);
    console.log(études);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if (i == 6) {
        console.groupEnd();
        console.groupCollapsed("semana 2");
    }
}

console.groupEnd();
console.groupEnd();




