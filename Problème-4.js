//Calculatrice

const addition = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const reste = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplication = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const division =  (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("Quel calcul voulez-vous réaliser?");
let calcul = prompt("1: addition, 2: reste, 3: multiplication, 4: division");

if (calcul == 1) {

    let nombre1 = prompt("premier nombre à additioner");
    let nombre2 = prompt("deuxieme nombre à additioner");
    resultat = addition(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);
}

else if (calcul == 2) {

    let nombre1 = prompt("premier nombre à soustraire");
    let nombre2 = prompt("deuxieme nombre à soustraire");
    resultat = reste(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);

}

else if (calcul == 3) {

    let nombre1 = prompt("premier nombre à multiplier");
    let nombre2 = prompt("deuxième nombre à multiplier");
    resultat = multiplication(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);

}

else if (calcul ==4) {

    let nombre1 = prompt("premier nombre à diviser");
    let nombre2 = prompt("deuxieme nombre à diviser");
    resultat = division(nombre1, nombre2);
    alert(`ton résultat est ${resultat}`);

}

else {
    alert("aucun calcul n'a été détecté");
}


