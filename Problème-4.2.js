class Calculatrice {
    constructor() {

    }

addition(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

reste(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

multiplication(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

division(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

puissance(num, exp) {

    return num**exp;
}
racineCarree(num) {

    return Math.sqrt(num);
}
racineCubique(num) {

    return Math.cbrt(num);
}
}

const calculatrice = new Calculatrice();

alert("Quel calcul voulez-vous réaliser?");
let calcul = prompt("1: addition, 2: reste, 3: multiplication, 4: division, 5: puissance, 6: racine carrée, 7: racine cubique");

if (calcul == 1) {

    let nombre1 = prompt("premier nombre à additioner");
    let nombre2 = prompt("deuxieme nombre à additioner");
    resultat = calculatrice.addition(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);
}

else if (calcul == 2) {

    let nombre1 = prompt("premier nombre à soustraire");
    let nombre2 = prompt("deuxieme nombre à soustraire");
    resultat = calculatrice.reste(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);

}

else if (calcul == 3) {

    let nombre1 = prompt("premier nombre à multiplier");
    let nombre2 = prompt("deuxième nombre à multiplier");
    resultat = calculatrice.multiplication(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);

}

else if (calcul == 4) {

    let nombre1 = prompt("premier nombre à diviser");
    let nombre2 = prompt("deuxieme nombre à diviser");
    resultat = calculatrice.division(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);

}

else if (calcul == 5) {

    let nombre1 = prompt("premier nombre pour la puissance");
    let nombre2 = prompt("deuxieme nombre pour la puissance");
    resultat = calculatrice.puissance(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);
}
else if (calcul == 6) {

    let nombre1 = prompt("connaître la racine carrée de:");
    resultat = calculatrice.racineCarree(nombre1);
    alert(`la racine carrée de ${nombre1} est ${resultat} `)
}
else if (calcul == 7) {

    let nombre1 = prompt("connaître la racine cubique de:");
    resultat = calculatrice.racineCubique(nombre1);
    alert(`la racine cubique de ${nombre1} est ${resultat} `)
}

else {
    alert("aucun calcul n'a été détecté");
}


