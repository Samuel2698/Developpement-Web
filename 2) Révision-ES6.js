//* Compare Scopes of the var and let Keywords

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 2
console.log(i); // ! error

var printNumTwo2;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo2 = function() {
      return i;
    };
  }
}
console.log(printNumTwo2()); // 3 car var
console.log(i); // 3 car var


//* Mutate an Array Declared with const

const z = [5, 6, 7];

// s = [1, 2, 3]; donne error car const s

z[2] = 45;
console.log(z); // [5, 6, 45]

const s = [5, 7, 2];
function editInPlace() {
  
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace(); // [2, 5, 7]

//* Prevent Object Mutation

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj); 
  // cette fonction va éviter que mes données changent

  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 
//name: "FreeCodeCamp" review: "Awesome"

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS); // ! on évite des changements 
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

//* Use Arrow Functions to Write Concise Anonymous Functions

var magia = function() {
    return new Date();
  };

// ! ou 
const magic = () => new Date();

//* Write Arrow Functions with Parameters

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };

// ! ou

const miConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(miConcat([1, 2], [3, 4, 5]));
//[1, 2, 3, 4, 5]

//* Set Default Parameters for Your Functions

const salutation = (prenom = "Anonyme") => "Salut " + prenom;

console.log(salutation("Samuel"));
console.log(salutation());
/* Salut Samuel
Salut Anonyme */

/* Par exemple si value non spécifié:
! const increment = (number, value = 1) => number + value;
on ajoute donc value =1 */

//* Use the Rest Parameter with Function Parameters

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  
console.log(sum(1, 2, 6)); // 9

//* Use the Spread Operator to Evaluate Arrays In-Place

const lista = [6, 89, 3, 45];

const maximo = Math.max(...lista); 
// c'est comme si le reste de la liste se trouvait dans les ... 

console.log(maximo); // 89

const unaLista = [-55, -666, -1];

const minimo = Math.min(...unaLista);

console.log(minimo); // -666

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // ! ...arr1 contient ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

console.log(arr2);
// ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

//* Use Destructuring Assignment to Extract Values from Objects

// Au lieu de (en ES5):
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// On peut faire (en ES6):
const usuario = { nombre : 'Paul Vazo', edad: 42};

const {nombre, edad} = usuario;

console.log(nombre, edad);
// Paul Vazo 42

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;

//* Use Destructuring Assignment to Assign Variables from Objects

const usuario1 = { nombre : 'Paul Vazo', edad: 42};

const {nombre: nombreDeUsario, edad: edadDeUsario} = usuario1;

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1;

//* Use Destructuring Assignment to Assign Variables from Nested Objects

//Au lieu de:

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday1 = LOCAL_FORECAST.today.high;


const LOCAL_FORECAST1 = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday1, high: highToday2 }} = LOCAL_FORECAST;

//* Use Destructuring Assignment to Assign Variables from Arrays

const [y, w] = [1, 2, 3, 4, 5, 6];
console.log(y, w);
// 1, 2

const [v, e, r, t] = [1, 2, 3, 4, 5, 6];
console.log(v, e, r, t);
// 1, 2, 3, 4

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
// 1, 2, 5.


const [g, h,,,,,,, j] = [1, 2, 3, 4, 5, 6, 555, -44, 998, 88, 1];
console.log(g, h, j);
// 998

let m = 8, n = 6;
[m, n] = [n, m]; // Echange de valeurs

//* Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const [uno, dos, ...lol] = [1, 2, 3, 4, 5, 7];

console.log(uno, dos); // 1, 2
console.log(lol); // [3, 4, 5, 7]

const [tres, cuatro, ...xd] = [1, 2, 3, 4, 5, 7];

console.log(xd); // [3, 4, 5, 7]
console.log(tres, cuatro); // 1, 2

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
 const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

console.log(source); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr);  //  [3, 4, 5, 6, 7, 8, 9, 10]

//* Use Destructuring Assignment to Pass an Object as a Function's Parameters

// A la place de:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
// On peut faire: 

const profileUpdate1 = ({ name, age, nationality, location }) => {

}

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0;

console.log(stats.max + stats.min); 

// ! ou
const half1 = ({ max, min }) => (max + min) / 2.0;

//* Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {

  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failureList = makeList(result.failure); 

// ! PARTIE 2


//* Write Concise Object Literal Declarations Using Object Property Shorthand

// Au lieu de:
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};

// On peut faire à la place:
const createPerson1 = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};

//* Write Concise Declarative Functions with ES6

const bicycle = {
  gear: 2,
  setGear(newGear) { // Au lieu de setGear function(newGear) 
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//* Use class Syntax to Define a Constructor Function

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // carrot 

//* Use getters and setters to Control Access to an Object

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); 
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature; 

//* Create a Module Script

{/* <body>
<script type="module" src="index.js"></script>
</body> */}

//* Use export to Share a Code Block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

/* export {uppercaseString};
export {lowercaseString}; */

// On peut aussi faire: 
// ! export {uppercaseString, lowercaseString};

//* Reuse JavaScript Code Using import

//import {uppercaseString, lowercaseString} from './string_functions.js';
// ! attention au ./ après from ''
uppercaseString("hello");
lowercaseString("WORLD!");

//* Use * to Import Everything from a File

//import * as stringFunctions from './string_functions.js';
/* 
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!"); */

//* Create an Export Fallback with export default
/* 
export default function subtract(x, y) {
  return x - y;
}
 */
//* Import a Default Export

//import subtract from "./math_functions.js";
// ! pas besoin des {} dans ce cas
//subtract(7,4);

//* Create a JavaScript Promise

const makeServerRequest1 = new Promise((resolve, reject) => {

});

//* Complete a Promise with resolve and reject
/* 
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  
if(responseFromServer) {
  resolve("We got the data");
} else {  
  reject("Data not received");
}
}); */

//* Handle a Fulfilled Promise with then

/* const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
}); */

//* Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error)
});

// ? The end :)

