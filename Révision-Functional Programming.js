//* About Functional Programming

// Fonction qui renvoie une chaîne représentant une tasse de thé vert
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  const tea4TeamFCC = getTea(4);
  console.log(tea4TeamFCC);
  // ['greenTea', 'greenTea', 'greenTea', 'greenTea']

//* Understand Functional Programming Terminology

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea, 5); 
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 3);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
// ['greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea']
// ['blackTea', 'blackTea', 'blackTea'] 


const prepararTeVerde = () => 'teVerde';
const prepararTeNegro = () => 'teNegro';

const tomarTe = (prepararTe, numeroDeTazas) => {
  const tazasDeTe = [];

  for(let tazas = 1; tazas <= numeroDeTazas; tazas += 1) {
    const tazaDeTe = prepararTe();
    tazasDeTe.push(tazaDeTe);
  }
  return tazasDeTe;
}

const teParaElEquipo = tomarTe(prepararTeVerde, 4);
console.log(teParaElEquipo); // ['teVerde', 'teVerde', 'teVerde', 'teVerde']

//* Understand the Hazards of Using Imperative Code

// tabs est un tableau des titres de chaque site ouvert dans la fenêtre
const Window = function(tabs) {
  this.tabs = tabs; // on garde un enregistrement du tableau à l'intérieur de l'objet
};

// deux fenêtres en une seule fenêtre
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// un nouvel onglet à la fin
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); 
  return this;
};

// on ferme un onglet 
Window.prototype.tabClose = function(index) {

  const tabsBeforeIndex = this.tabs.slice(0, index); 
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 

  return this;
 };

// On crée trois fenêtres de navigateur
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 

// Ouverture, fermeture et d'autres opérations de l'onglet
const finalTabs = socialWindow
  .tabOpen() 
  .join(videoWindow.tabClose(2)) 
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//* Avoid Mutations and Side Effects Using Functional Programming

var fixedValue1 = 4;

function incrementer1() {
 
  return fixedValue1 + 1;
}

var newValue = incrementer1(); 

console.log(fixedValue1); // 4
console.log(newValue); // 5

//* Pass Arguments to Avoid External Dependence in a Function

let fixedValue2 = 4;

function incrementer2(value) {

 return value + 1;
  
}

var differentValue = incrementer2(fixedValue2); 

console.log(fixedValue2); // 4
console.log(differentValue); // 5

//* Refactor Global Variables Out of Functions

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr]; 
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr; 
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
// ['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']

//* Use the map Method to Extract Data from an Array

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); //  ['John', 'Amy', 'camperCat']

const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

console.log(JSON.stringify(ratings));
// [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]

//* Implement map on a Prototype

const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
    this.forEach(a => newArray.push(callback(a)));
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

//* Use the filter Method to Extract Data from an Array

const filteredList = watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));

console.log(filteredList);
// 0: {title: 'Inception', rating: '8.8'}
// 1: {title: 'Interstellar', rating: '8.6'}
// 2: {title: 'The Dark Knight', rating: '9.0'}
// 3: {title: 'Batman Begins', rating: '8.3'}

const filtrarListas = watchList
  .filter(peli => peli.imdbRating < 8.0)
  .map(peli => ({title: peli["Title"], rating: peli["imdbRating"]}));

console.log(filtrarListas); // {title: 'Avatar', rating: '7.9'}

//* Implement the filter Method on a Prototype

let z = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArray = [];
  this.forEach(function(x) {
    
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  return newArray;
};

new_z = z.myFilter(function(item){
  return item % 2 === 1;
});

//* Return Part of an Array Using the slice Method

// Exemple de slice()

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
console.log(newArray);
//  ['Dog', 'Tiger']

function sliceArray(anim, beginSlice, endSlice) {
  
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
let result = sliceArray(inputAnim, 1, 3);

console.log(result); // ['Dog', 'Tiger']

//* Remove Elements from an Array Using slice Instead of splice

// Exemple de splice()

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(cities.splice(0, 2));
// ['Chicago', 'Delhi']
// console.log(cities.splice(3, 1)); ['London']

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities)); // [ 'Chicago', 'Delhi', 'Islamabad' ]

//* Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second)); // [ 1, 2, 3, 4, 5 ]

//* Add Elements to the End of an Array Using concat Instead of push

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

const first2 = [1, 2, 3];
const second2 = [4, 5];
console.log(nonMutatingPush(first, second)); // [ 1, 2, 3, 4, 5 ]

//* Use the reduce Method to Analyze Data

// Exemples de reduce()

const users2 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users2.reduce((sum, user) => sum + user.age, 0); 
console.log(sumOfAges); // 64

const users3 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users3.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});

console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

function getRating(watchList){
  const averageRating = watchList
    // filter() pour trouver des films réalisés par Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")

    // map() pour convertir leurs notes de chaînes en nombres
    .map(film => Number(film.imdbRating))

    // reduce() pour additionner leurs notes
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) / 
    
  // On divise par le nombre de films Nolan pour obtenir la note moyenne
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  
  return averageRating;
}

//* Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2))
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//* Sort an Array Alphabetically using the sort Method

// Exemples de sort()

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log(ascendingOrder([1, 5, 2, 3, 4])); // [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); // ['z', 's', 'l', 'h', 'b']

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// ['a', 'a', 'c', 'd', 'g', 'z']

//* Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
   return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

console.log(nonMutatingSort(globalArray)); // [ 2, 3, 5, 6, 9 ]
 
//* Split a String into an Array Using the split Method

// Exemples de split()

const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace); // ['Hello', 'World']

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/); //! d pour les nombres
console.log(byDigits); // ['How', 'are', 'you', 'today']

function splitify(str) {
  return str.split(/\W/); //! W pour tout ce qui n'est pas un nombre ou lettre !== w
}

console.log(splitify("Hello World,I-am code")); //  ['Hello', 'World', 'I', 'am', 'code']

//* Combine an Array into a String Using the join Method

// Exemple de join()

const arr1 = ["Hello", "World"];
const str1 = arr1.join(" ");

console.log(str1); // Hello World

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you")); // May the force be with you

//* Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim() //! trim() pour retirer les blancs en début et fin de chaîne
    .split(/\s+/)
    .join("-");
}

console.log(urlSlug("    A Mind Needs Books Like A Sword Needs A Whetstone"));
// a-mind-needs-books-like-a-sword-needs-a-whetstone

//* Use the every Method to Check that Every Element in an Array Meets a Criteria

// Exemple de every()

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
// La méthode every renverrait false ici

function checkPositive(arr) {
  return arr.every(val => val > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5])); // false

//* Use the some Method to Check that Any Elements in an Array Meet a Criteria

// Exemple de some()

const numbers2 = [10, 50, 8, 220, 110, 11];

numbers2.some(function(currentValue) {
  return currentValue < 10;
});
// La méthode some renverrait true ici

function checkPositive2(arr) {
  return arr.some(elem => elem > 0);
 }
 
 console.log(checkPositive2([1, 2, 3, -4, 5])); // true

//* Introduction to Currying and Partial Application

function add2(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

console.log(add2(10)(20)(30)); // 60

// Ou tout simplement:

function add3(x) {
  return y => z => x + y + z;
}

console.log(add3(10)(20)(50)); //80
