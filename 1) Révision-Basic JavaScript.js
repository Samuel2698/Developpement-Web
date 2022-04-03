let fav_pet = "Cats"; //après let en minuscule
fav_pet = "Dogs";

const FAV_PET = "Perro"; //après const en mayuscule
//FAV_PET = gato; // !error (in console), gato is not defined

const arr1 = [1, 2, 3];
arr1.push(4); //ajoute un élément au final de la liste
//1,2,3,4

//* unshift() ajoute un élément au début de la liste

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
//Stimpson,J,cat,happy,joy

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop(); 
//cat,2

// *shift() élimine le premier et pas le dernier comme pop()


function reusableFunction() {
    console.log("Hi World");
    }
reusableFunction();
//"Hi World"

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
  }
  
  functionWithArgs(1,2);
  //3

  function timesFive(num) {
    return console.log(num * 5);
  }
  
  timesFive(5);
  //25


//La fonction va retourner "Head"
  const someVar = "Hat";

  function myFun() {
    const someVar = "Head";
    return someVar;    
  }

function sum(num1, num2) {
    return console.log(num1 + num2);
}
sum(5,6);
//11

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
   case 1:
     answer = "alpha";
     break;

   case 2:
     answer = "beta";
     break;

   case 3:
     answer = "gamma";
     break;

   case 4:
     answer = "delta";
     break;
 }
 
 return answer;
}
// *Au lieu de answer = on peut utiliser return

// *Par exemple:
function switchOfStuff(val) {
 let answer = "";
 switch(val) {
   case "a":
     return "apple";
     break;

   case "b":
     return "bird";
     break;

   case "c":
     return "cat";
     break;

   default: //sera exécutée si aucune instruction case correspondante n'est trouvée
     return "stuff";
     break;
 }
}

switchOfStuff(1); 

// * Quand t'as plusieurs inputs pour le même output
function sequentialSizes(val) {
 let answer = "";
 switch(val) {
   case 1:
   case 2:
   case 3:
      answer = "Low";
      //on peut aussi substituer answer = par return
     break;

   case 4:
   case 5:
   case 6:
     answer = "Mid";
     break;

   case 7:
   case 8:
   case 9:
     answer = "High";
     break;
 }
 return answer; 

}

sequentialSizes(1);

//Au liue de faire:
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

//On le fait de la manière suivante:
function isEqual(a, b) {
  return a === b;
}

//De même: 
function isLess(a, b) {
 return a < b;
}

isLess(10, 15);

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")//car return avant "byebye" ne s'affichera jamais dans la console
}
myFun();

// * Counting Cards

//Solution 1:
let count = 0;

function cc(card) {
  
  switch(card) {
    case 2:
    case 3:
    case 4: 
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  
  if (count > 0) {
    return count + " Bet";

  } else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Solution 2:
count = 0;

function cc(card) {
 
 let regex = /[JQKA]/;

 if (card > 1 && card < 7) {
   count++;

 } else if (card == 10 || regex.test(card)){
   count--;
 }

  if (count > 0) return count + " Bet";
  return count + " Hold";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Objets:
const myDog = {
  name: "Nochi",
  legs: 4,
  tails: 1,
  friends: ["Samuel", "Freddy", "Felicia", "Raquel", "Chipi"]
};

//Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat; //-> Dot Notation
const shirtValue = testObj.shirt;    

//Bracket Notation
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"]; 

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

//Accessing Object Properties with Variables
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16; 
const player = testObj3[playerNumber];   //comme si c'était testObj3.16

//Updating Object Properties
const myDog2 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog2.name = "Happy Coder";

//Add New Properties to a JavaScript Object
const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog3.bark = "woof"; //bark == aboyer

// Delete Properties from a JavaScript Object
const myDog4 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog4.tails;

// Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";

  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"

  } 
  result = lookup[val];
  
  return result;
}

//Manipulating Complex Objects
const myMusic = [
  { //on les divide avec {}
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  , // ! ne pas oublier le , pour les séparer
   {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];


//*Accessing Nested Objects

//Ex 1:
const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2; // "secrets"
  ourStorage.desk.drawer; // "stapler"

//Ex 2:
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"]; // "maps"

//Accessing Nested Objects
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1]; // "pine"

//Record Collection
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
  
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
  
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
  
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//*Iterate with JavaScript While Loops

//Ex 1:
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
//0 à 4

//Ex 2:
const myArray = [];
let x = 5;

while (x >= 0) {
  myArray.push(x);
  x--;
}
//5 à 0

//*Iterate with JavaScript For Loops

//Ex 1:
const ourArray2 = []

for (let i = 0; i < 5; i++) {
  ourArray2.push(i);
}
//0 à 4

//Ex 2:
const myArray2 = [];

for (let x = 1; x <= 5; x++) {
  myArray2.push(x);
}

//*Iterate Odd Numbers With a For Loop

//Ex 1:
const ourArray3 = [];

for (let i = 0; i < 10; i += 2) { // i < 10 ou i <=9
  ourArray3.push(i);
}
//[0, 2, 4, 6, 8]

//Ex 2:
const myArray3 = [];

for (let i = 1; i <= 9; i += 2) { // i < 10 ou i <=9
  myArray3.push(i);
}

//*Count Backwards With a For Loop

const myArray4 = [];

for (let i = 9; i >= 1; i -= 2) {
  myArray4.push(i);
}
//9 à 1

//Iterate Through an Array with a For Loop
const miLista = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < miLista.length; i++) {
  total += miLista[i];
}

//*Nesting For Loops

function multiplyAll(arr) {
  let product = 1;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  return product;
}

//*Iterate with JavaScript Do...While Loops

const unaLista = [];

let z = 10;

do {
  unaLista.push(z);
  z++;

} while (z < 10);
//10

//*Replace Loops using Recursion

//Ex 1:
function multiply(arr, n) {
  if (n <= 0) { 
    return 1; // ! return 1 car multiplication

  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

//Ex 2:
function sum(arr, n) {
  
  if(n <= 0) {
  return 0; // ! return 0 car addition 

} else {
  return sum(arr, n - 1) + arr[n - 1];
}
}

//*Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  
  for (let x = 0; x < contacts.length; x++) {

    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
        
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";

}

lookUpProfile("Akira", "likes");

//*Generate Random Fractions with JavaScript

function randomFraction() {
  
  let result = 0;

  while (result === 0) {
    result = Math.random();
  }

  return result;
}

//* Generate Random Whole Numbers with JavaScript

// De 0 à 0
function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}

//*Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
 
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
 }
/*  Math.random() = 0.8244326990411024
 (myMax - myMin + 1) = 10 - 1 + 1 -> 10
 a * b = 8.244326990411024
 c + myMin = 9.244326990411024
 Math.floor(9.244326990411024) = 9  */

//*Use the parseInt Function

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//*Use the parseInt Function with a Radix

function convertToInteger(str) {
  return parseInt(str, 2); 
}

convertToInteger("10011");

//*Use the Conditional (Ternary) Operator

// Au lieu de:
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

//On peut faire:
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

//Ex:
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//* Use Multiple Conditional (Ternary) Operators

// Au lieu de:
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

// On a:
function findGreaterOrEqual(a , b) {

  return a === b ? "a and b are equal"
  : a > b ? "a is greater"
  : "b is greater";
}

// Ex:
function checkSign(num) {
  return num > 0 ? "positive"
  : num < 0 ? "negative"
  : "zero";
}

checkSign(10);

//* Use Recursion to Create a Countdown

//Ex 1:
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
// [1, 2, 3, 4, 5]

//Ex 2:
function countdown0(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown0(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// Ou: 
function countdown(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
// La fonction concat() est utilisée pour joindre deux ou plusieurs chaînes ensemble
console.log(countdown(5));
// [5, 4, 3, 2, 1]

// Ou encore:
function countdown(n){
  return n < 1 ? [] : [n,  ...countdown(n - 1)];
}

// ! [n, ...(...)] au lieu de [n].concant(...)

//*  Use Recursion to Create a Range of Numbers

// Ex 1:
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
 
  } else {
    let numbers = rangeOfNumbers(startNum, endNum - 1); // Attention au - 1
    numbers.push(endNum); // ! push()
    return numbers;
  }
 }

 // Ex 2:
function rangeOfNumbers(startNum, endNum) {
  return endNum === startNum
  ? [startNum]
  : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
} // ! concat()

// Ex 3:
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum 
  ? [startNum]
  : [...rangeOfNumbers(startNum, endNum - 1), endNum];
} //! ...(...), endNum

//The end :)






