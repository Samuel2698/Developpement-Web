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









