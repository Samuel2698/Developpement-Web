//* Sum All Numbers in a Range

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll([1, 4])); // 10

function sumAll2(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll2([5, 9])); // 35

function sumaTodo(arr) {
  max = Math.max(arr[0], arr[1]);
  min = Math.min(arr[0], arr[1]);

  let sumaEntreDos = 0;
  for (let i = min; i <= max; i++) {
    sumaEntreDos += i;
  }
  return sumaEntreDos;
}
console.log(sumaTodo([5, 8])); // 26

function toutAdditionner(arr) {
  let additionnerEntreDeux = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
    additionnerEntreDeux += i;
  }
 return additionnerEntreDeux;
}
console.log(toutAdditionner([3,6])); // 18

//* Diff Two Arrays

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

function difArr(arr1, arr2) {
  const nuevoArr = [];

  function soloElPrimero(primero, segundo) {
    for (let i = 0; i < primero.length; i++) {

      if (segundo.indexOf(primero[i]) === -1) {
        nuevoArr.push(primero[i]);
      }
    }
  }
  soloElPrimero(arr1, arr2);
  soloElPrimero(arr2, arr1);

  return nuevoArr;
}
console.log(difArr([1, 99, 3, 5], [1, 99, 3, 67, 5])); // [67]

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 4, 3, 5], [1, 4, 3, 6, 5])); // [6]

function diferenteArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diferenteArray([1, 4, 3, 5], [1, 4, 3, 98, 5])); // [98]

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

console.log(diffArray([1, 4, 3, 5], [1, 4, 3, 77, 5])); // [77]

function elDiferente(arr1, arr2) {
  return [...elDiferenteArr(arr1, arr2), ...elDiferenteArr(arr2, arr1)];

  function elDiferenteArr(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

console.log(elDiferente([1, 4, 3, 5], [1, 4, 3, 666, 5])); //[666]

//* Seek and Destroy

function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);
  //! attention à la combinaison de Object.values avec arguments() et slice()

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]

function destructor(arr) {
  let valoresARemover = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valoresARemover.length; j++) {
      if (arr[i] === valoresARemover[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}
console.log(destructor([1, 2, 3, 1, 2, 3], 1)); // [2, 3, 2, 3]

function destroyer2(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));

console.log(Array.from("maison")); // ['m', 'a', 'i', 's', 'o', 'n']

function destructor2(arr) {
  let valoresARemover = Array.from(arguments).slice(1);
  
  return arr.filter(function(val) {
    return !valoresARemover.includes(val);
  });
}
console.log(destructor2([1, 2, 3, 1, 2, 3], 1)); // [2, 3, 2, 3]

function destroyer3(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
console.log(destroyer3([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]

function destructor3(arr, ...valoresARemover) {
  return arr.filter(arr => valoresARemover.includes(arr));
}
console.log(destructor3([1, 2, 3, 1, 2, 3], 1)); //  [1, 1]
//! car valoresARemover !== !valoresARemover

//* Wherefore art thou

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
 
   return collection.filter(obj => {
     for (let i = 0; i < sourceKeys.length; i++) {
       
       if (!obj.hasOwnProperty(sourceKeys[i]) ||
           obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
         return false;
       }
     }
     return true;
   });
 }
 console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
 // [ { first: 'Tybalt', last: 'Capulet' } ]

function whatIsInAName2(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
                     .every(key => obj.hasOwnProperty(key) &&
                            obj[key] === source[key]));
}

whatIsInAName2(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

console.log(whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// [ { first: 'Tybalt', last: 'Capulet' } ]

function cualNombre(coleccion, fuente) {
  const fuenteDeLaLlave = Object.keys(fuente);

  return coleccion
        .filter(obj => fuenteDeLaLlave
                        .every(key => obj.hasOwnProperty(key) &&
                                obj[key] === fuente[key]));

}
console.log(cualNombre([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Montague" }));
// [ {first: 'Romeo', last: 'Montague'} ]

function whatIsInAName3(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => sourceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b));
}

console.log(whatIsInAName3([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Montague" }));
// [ {first: 'Romeo', last: 'Montague'} ]

function quelPrenom(collection, source) {
  const sourceCles = Object.keys(source);

  return collection.filter(obj => sourceCles
    .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
    .reduce((a, b) => a && b));
}
console.log(quelPrenom([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// [{first: 'Tybalt', last: 'Capulet'}]

//* Spinal Tap Case

function spinalCase(str) {
  // Une variable pour l'espace blanc et les traits de soulignement.
  var regex = /\s+|_+/g;

  // Remplacer les minuscules par des majuscules à faible espace
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Remplace l'espace et le trait de soulignement par -
  return str.replace(regex, "-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
// this-is-spinal-tap

function spinalCase2(str) {

  let expression = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(expression, "-").toLowerCase();
}
console.log(spinalCase2("This Is Spinal Tap")); // this-is-spinal-tap

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

let text = "Is this all there is?";
let pattern = /\s/g;
let result = text.match(pattern);
console.log(result);
// [' ', ' ', ' ', ' ']

function otraOracion(str) {
  
  return str
    .split(/\s|_|(?=[A-Z])/);
}
console.log(otraOracion("This Is Spinal Tap"));
//['This', 'Is', 'Spinal', 'Tap']

function otraOracion2(str) {

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-");
}
console.log(otraOracion2("This Is Spinal Tap"));
// This-Is-Spinal-Tap

function otraOracion3(str) {

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(otraOracion3("This Is Spinal Tap"));
// this-is-spinal-tap

//* Pig Latin

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/; //! chaque ^ fait la différence
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
console.log(translatePigLatin("consonant"));
// onsonantcay

function pigLatin(str) {
  let consonantRegex = /^[^aeiou]/;
  let myConsonants = str.match(consonantRegex);

  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("way")
    : str.concat("ay");
}
console.log(pigLatin("PigLatin")); // igLatinPay
console.log(pigLatin("consonant")); //onsonantcay

//* Search and Replace

function myReplace(str, before, after) {
  // On vérifie si le premier caractère de l'argument "before" est une 
  // lettre majuscule ou minuscule et on modifie le premier caractère 
  // de l'argument "after" pour correspondre à la casse
  
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string avec l'argument "before" remplacé par l'argument "after" 
  // (avec la casse correcte)
  return str.replace(before, after);
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// A quick brown fox leaped over the lazy dog

function reemplazo(str, before, after) {

  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)

  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
  return str.replace(before, after);
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "flex"));
// A quick brown fox flex over the lazy dog

