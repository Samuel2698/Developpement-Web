//* Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
console.log(a); // 6

let sumAB = a + b;
console.log(sumAB); // 7

//* Understanding the Differences between the freeCodeCamp and Browser Console

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear(); // Console was cleared

// *Use typeof to Check the Type of a Variable

let seven = 7;
let three = "3";
// let tres = parseInt(three); pour après pouvoir les additioner
console.log(seven + three); // 73 car three est un string

console.log(typeof seven);
console.log(typeof three);

//* Catch Mixed Usage of Single and Double Quotes

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
// :)
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// :)
// const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
// ! :v car mêmes guillemets

//*Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

if(x == y) { //! faut utiliser le ==
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result); // Not equal!

//* Catch Missing Open and Closing Parenthesis After a Function Call

function myFunction() {
    return "You rock!";
  }
  let varOne = myFunction; //! c'est juste la fonction
  let varTwo = myFunction(); //! c'est "You rock!"

  function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  result = getNine(); //! fonctionne grâce aux ()
  console.log(result);

//* Catch Arguments Passed in the Wrong Order When Calling a Function

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp); //! fonctionne car base et puis exp
  console.log(power);

//* Catch Off By One Errors When Using Indexing

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]); //! Nope, une fois de plus
}
for (let j = 1; j < len; j++) { //! Nope, une fois de moins
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) { //! Bien :)
  console.log(alphabet[k]);
}

//*Use Caution When Reinitializing Variables Inside a Loop

function zeroArray(m, n) {
  
    let newArray = [];
    let row = [];
  
    for (let i = 0; i < m; i++) {
        let row = []; //! une nouvelle ligne sera initialisée à chaque itération de la boucle externe
  
      for (let j = 0; j < n; j++) {
       
        row.push(0);
      }
      
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix); // [Array(2), Array(2), Array(2)]
// 0: (2) [0, 0]
// 1: (2) [0, 0]
// 2: (2) [0, 0]

//* Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
    for (let i = 1; i <= 4; i += 2) { //! i <= 4
      console.log("Still going!");
    }
  }
