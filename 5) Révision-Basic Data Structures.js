//* Use an Array to Store a Collection of Data

// Exemple d'un array simple:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); // 7

// Un array plus complexe:

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

 console.log(complexArray.length); // 2 

//* Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];

myArray[1] = "bazinga";

console.log(myArray);

//* Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//* Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
// ['challenge', 'complete']

//* Remove Items Using splice()

let array = ['today', 'was', 'not', 'so', 'great'];

let resultado = array.splice(2, 2);

console.log(resultado); // ['not', 'so']

array = ['today', 'was', 'not', 'so', 'great'];

resultado = array.splice(0, 3);

console.log(resultado); // ['today', 'was', 'not']


const arr = [2, 4, 5, 1, 7, 5, 2, 1];

let result = arr.splice(1, 4); // l'addition va donc donner 10

console.log(arr); // [2, 5, 2, 1]


//* Add Items Using splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3; //! où ça commence 
const amountToDelete = 1; //! combien on va éliminer

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); // [10, 11, 12, 13, 14, 15]

function htmlColorNames(arr) {

    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
   return arr;
 }
 
 console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']

//* Copy Array Items Using slice()

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather); // on crée un nouveau array
// ['snow', 'sleet']

// ! slice() ne prend que 2 paramètres

function forecast(arr) {
  
    return arr.slice(2,4);
  }
  //! on commence l'extraction en 2 donc 'warm'
  //! on arrête l'extraction en 4 donc 'cool'
  //! Donc ['warm', 'sunny']
  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// ['warm', 'sunny']

//* Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
 
  console.log(copyMachine([true, false, true], 2));

//* Combine Arrays with the Spread Operator

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
  }
  
  console.log(spreadOut()); // ['learning', 'to', 'code', 'is', 'fun']
  

//* Check For The Presence of an Element With indexOf()

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

resultado = fruits.indexOf('dates');
resultado2 = fruits.indexOf('oranges');
resultado3 = fruits.indexOf('pears');

console.log(resultado, resultado2, resultado3); // -1 2 1
//! -1 car il ne se trouve pas 
//! 2 et 1 sont des positions 

// function quickCheck(arr, elem) {
//     if (arr.indexOf(elem) >= 0) {
//      return true;
//    }
//    return false;
//  }
 
//  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//* Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// Create complex multi-dimensional arrays

  let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

  
  let myNestedArray = [

    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
  
  ];
 
//* Add Key-Value Pairs to JavaScript Objects

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };

  tekkenCharacter.origin = 'South Korea';

  tekkenCharacter['hair color'] = 'dyed orange';

  const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

// Donc:

// {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true,
//     origin: 'South Korea',
//     'hair color': 'dyed orange',
//     'eye color': 'brown'
//   };


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  
  console.log(foods);
// {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, …}

//* Modify an Object Nested Within an Object

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
}
  // Pour trouver la valeur de busy à 10:
  result = nestedObject.data.onlineStatus.busy = 10;
  console.log(result); // 10

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online = 45;
  
  console.log(userActivity); // {totalUsers: 51, online: 45}

//* Access Property Names with Bracket Notation
  
foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
   return foods[scannedItem];
}

console.log(checkInventory("apples")); // 25

//* Use the delete Keyword to Remove Object Properties

foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries ;

console.log(foods); // {apples: 25, bananas: 13, grapes: 35}

//* Check if an Object has a Property

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
 return userObj.hasOwnProperty("Alan") &&
 userObj.hasOwnProperty("Jeff") &&
 userObj.hasOwnProperty("Sarah") &&
 userObj.hasOwnProperty("Ryan") ? true : false;
}

console.log(isEveryoneHere(users)); // true

// Ou: 

// function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
// } //! On utiliser la fonction every()

//* Iterate Through the Keys of an Object with a for...in Statement

const users2 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(users2)); // 1

//* Generate an Array of All Object Keys with Object.keys()

users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
}; 

function getArrayOfUsers(obj) {
   return Object.keys(obj);
}

console.log(getArrayOfUsers(users)); // ['Alan', 'Jeff', 'Sarah', 'Ryan']


//* Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
   userObj.data.friends.push(friend);
   return userObj.data.friends;
}

console.log(addFriend(user, "Pete")); // ['Sam', 'Kira', 'Tomo', 'Pete']

