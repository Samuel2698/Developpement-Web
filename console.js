/**
 * ! Fonctions d'enregistrement
 */

console.assert( 5 < 3);
//on aura "Assertion failed"

//console.clear(); //pour nettoyer la console

console.error("Qu'est-ce que tu fais??") //on aura un message d'error dans la console

//console.info vs console.log:

console.info([5,2,4,,6,6]);

console.log([5,2,4,,6,6]);
//les mêmes résultats, ils sont presque pareils, mais log est plus utilisé

console.table([6,8,8,66,998, "home", 'red']); //elle crée une table

console.warn('tu fais quoi?');

console.dir([5,2,4,,6,6]);

/**
 * ! Fonctions de comptage
 */

console.count()
console.count()
console.countReset()
console.count()

//elle compte le nombre de fois qu'on utilise count()
//par exemple:

function sumar(num1,num2) {
    document.write(num1,num2);
    console.count();
    //combien de fois on va utiliser la fonction sumar()?
    //on utilise console.count pour le savoir
}

sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
//d'après la console on a écrit sumar() 43 fois
console.countReset();
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);

/**
 * ! Fonctions de regroupement
 */

console.group("grupo1");
console.log("hey :)");
console.error("hey :v");
//tout ce qui est au-dessous de console.group() sera dans celle-ci dans la console 
console.group("grupo2");
console.error("O_o");
console.warn("wow");
//on peut avoir un group dans un group
console.groupEnd(); //donc les deux fonctionnes suivantes seront dans "grupo1"
console.log("sushi");
console.log("wasabi");
console.groupEnd(); //donc on est dehors de deux console.group()
console.log("He salido :)");

console.groupCollapsed("grupo3"); 
//le group va apparaître fermé dans la console
console.error(":O");
console.groupEnd();

/**
 * ! Fonctions de temporisation
 */


console.time();

function resta(num1,num2) {
    document.write(num1,num2);
    console.timeLog();
}

resta(2,4);
resta(2,4);
resta(2,4);
resta(2,4);
resta(2,4);
resta(2,4);
resta(2,4);
resta(2,4);

console.timeEnd(); //ça s'arrête

console.log("%ccarro", "color:red; background: greenyellow; padding: 20px 100px; border:3px solid blue; width: 300px; display:block");
//width ou display: block ne marchent pas
