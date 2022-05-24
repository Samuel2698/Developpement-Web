enum ContractStatus {
    Permanent = 4,
    Temp = 8,
    Apprentice = 4
}

const employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);


let randomValue = 'Max';

(randomValue as 'string').toUpperCase();

if (randomValue === 'string') {
    randomValue.toLocaleLowerCase()
}

if (Array.isArray(randomValue)) {
    randomValue[2]
}

let multiType: number | string = 20
multiType = "veinte"


function add (foo: number | string, y: number | string) {
    if (typeof foo === 'number' && typeof y === 'number') {
        return foo + y
    }

    if (typeof foo === 'string' && typeof y === 'string') {
        return foo.concat(y)
    }

    throw new Error('You\'re mixing types! LOL XD')
}

console.log(add(1, 5))
console.log(add("uno ", "dos"))
// console.log(add(1, "uno"))

const add2 = (truc: number | string, z: number | string) => {
    if (typeof truc === 'number' &&  typeof z === 'number') {
        return truc + z
    }

    if (typeof truc === 'string' && typeof z === 'string') {
        return truc.concat(z)
    }

    throw new Error('C\'est pas bien de mixer différents types mdr XD')
}

console.log(add2(4, 9))
console.log(add2("un ", "deux"))
// console.log(add2(6, "parallélépipède"))

interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  };

type reponse = "oui" | "non" | "bazinga"
let resultat: reponse

resultat = "oui"
resultat = "non" 
resultat = "bazinga"

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";    //! Invalid
console.log(myResult);

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7; //* Invalid

let list: number[] = [1, 2, 3]
console.log(list)

let persona: [string, number] = ["Samuel", 23] //* Valid
console.log(persona) 

// let person1: [string, number] = ['Marcia', 35, true]; //! Invalid
// let person1: [string, number] = [35, 'Marcia'] //! Invalid

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;
    
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }

/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

   let x: number;
   let y: number;
   let a: number;
   
   x = 5;
   y = 7;
   a = x + y;
   
   console.log(a);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

    enum Season {
        Fall,
        Winter,
        Spring,
        Summer
    }

   function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Fall));


enum Saison {
    Automne,
    Hiver,
    Printemps,
    Eté
}

const quelsMois = (saison: Saison) => {
    let moisEnSaison: string

    switch(saison) {
         case Saison.Automne:
            moisEnSaison = "de septembre à novembre"
            break;
        case Saison.Hiver:
            moisEnSaison = "de décembre à févrie"
            break;
        case Saison.Printemps:
            moisEnSaison = "de mars à mai"
            break;
        case Saison.Eté:
            moisEnSaison = "de juin à août"
    }
    return moisEnSaison;
}

console.log(quelsMois(Saison.Eté));

enum Estaciones {
    Otono,
    Invierno,
    Primavera,
    Verano
}

function cualMes (estaciones: Estaciones) {
    let estacionEnMeses: string

    switch(estaciones) {
        case Estaciones.Otono:
            estacionEnMeses = "de septiembre a noviembre"
            break;
        case Estaciones.Invierno:
            estacionEnMeses = "de diciembre a febrero"
            break;
        case Estaciones.Primavera:
            estacionEnMeses = "de marzo a mayo"
            break;
        case Estaciones.Verano:
            estacionEnMeses = "de junio a agosto"
    }
    return estacionEnMeses;
}

console.log(cualMes(Estaciones.Invierno));

enum Season2 {
    Fall,
    Winter,
    Spring,
    Summer
}

const months = {
    [Season.Fall]: "September to November",
    [Season.Winter]: "December to February",
    [Season.Spring]: "March to May",
    [Season.Summer]: "June to August"
}

function whichMonths2(season: Season) {
    return months[season]
}

console.log(whichMonths2(Season.Spring));

enum Saison2 {
    Automne,
    Hiver,
    Printemps,
    Eté
}

const mois = {
    [Saison.Automne]: "de semptembre à novembre",
    [Saison.Hiver]: "de décembre à février",
    [Saison.Printemps]: "de mars à mai",
    [Saison.Eté]: "de juin à août"
}

const quelsMois2 = (saison: Saison) => {
    return mois[saison]
}

console.log(quelsMois2(Saison.Hiver))

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

   let randomNumbers: number[] = [];
   let nextNumber: number;


   for (let i = 0; i < 10; i++) {
       nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
       randomNumbers.push(nextNumber);
   }
   
   console.log(randomNumbers);