//* DNA Pairing

function pairElement(str) {
   /*  Renvoie chaque brin sous la forme 
    d'un tableau de deux éléments, l'original et la paire */

    let paired = [];

    let search = function(char) {
      switch (char) {
        case "A":
          paired.push(["A", "T"]);
          break;
        case "T":
          paired.push(["T", "A"]);
          break;
        case "C":
          paired.push(["C", "G"]);
          break;
        case "G":
          paired.push(["G", "C"]);
          break;
      }
    };
  
    for (let i = 0; i < str.length; i++) {
      search(str[i]);
    }
  
    return paired;
  }
  
  console.log(pairElement("GCG")); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

function emparejarADN(str) {
    let emparejar = [];

    let buscar = function(char) {

        switch(char) {
            case "A":
                emparejar.push(["A", "T"]);
            break;
            case "T":
                emparejar.push(["T", "A"]);
            break;
            case "C":
                emparejar.push(["C", "G"]);
            break;
            case "G":
                emparejar.push(["G", "C"]);
            break;
        }
    };

    for (let i = 0; i < str.length; i++) {
        buscar(str[i]);
    }
    return emparejar;
}
console.log(emparejarADN("TCG")); // [ [ 'T', 'A' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

function pairElement2(str) {
    // on crée un objet pour la recherche de paire

    let pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };

    // on divise la chaîne en tableau de caractères
    let arr = str.split("");

    /* On mappe le caractère sur le tableau
    de caractères et la paire correspondante */
    return arr.map(x => [x, pairs[x]]);
  }
  console.log(pairElement("ATGC")); 
  // [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'G', 'C' ], [ 'C', 'G' ] ]

function mettreEnsembleADN(str) {

    let paires = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    let arr = str.split("");
    return arr.map(x => [x, paires[x]]);    
}
console.log(mettreEnsembleADN("ATGC"));
// [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'G', 'C' ], [ 'C', 'G' ] ]

//* Missing letters

function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
    str
      .split("")
      .forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
          currCharCode++;
        } else {
          missing = String.fromCharCode(currCharCode);
        }
      });
  
    return missing;
  }
  console.log(fearNotLetter("abce")); // d

function fearNotLetter2(str) {
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
  
      if (code !== str.charCodeAt(0) + i) {
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  fearNotLetter2("abce");
  
  console.log(fearNotLetter2("abcdefgi")); // h

//* Sorted Union

function uniteUnique(...arr) {
    const array = [...arr].flat();

    const result = array.filter((a,b) => 
     array.indexOf(a) === b
     );
    return result;
  }
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  // [ 1, 3, 2, 5, 4 ]

function uneUnité(...arr) {
    const liste = [...arr].flat();

    const resultat = liste.filter((a,b) => liste.indexOf(a) === b);
    return resultat;
    }   
    console.log(uneUnité([1, 3, 2], [5, 2, 1, 4], [2, 1]));
    // [1, 3, 2, 5, 4]

//*Convert HTML Entities

function convertHTML(str) {
    // Object Lookup pour déclarer autant d'entités HTML que nécessaire
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
     /* fonction map pour renvoyer une chaîne
     filtrée avec toutes les entités modifiées automatiquement */
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  console.log(convertHTML("Dolce & Gabbana"));
  // Dolce &amp; Gabbana

function convertirHTML(str) {

    const entitésHTML = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    return str
        .split("")
        .map(entités => entitésHTML[entités] || entités)
        .join("");       
}
console.log(convertirHTML("Dolce & Gabbana"));
// Dolce &amp; Gabbana

//* Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  console.log(sumFibs(4)); // 5

function sumaFibo(num) {
    let prevNum = 0;
    let currNum = 1;
    let resultado = 0;

    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            resultado += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
    }
    return resultado;
}
console.log(sumaFibo(10));

//* Sum All Primes

function sumPrimes(num) {

    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
  
  console.log(sumPrimes(10)); // 17

function sumaPrimos(num) {

    function esPrimo(num) {

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (esPrimo(i))
        sum += i;
    }
    return sum;
}
console.log(sumaPrimos(6)); // 10

//* Smallest Common Multiple

function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);

    // La plus grande valeur possible pour SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);

    // On test tous les multiples de 'max' 
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      
        // On vérifie si chaque valeur du range divise 'multiple'
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  }
  console.log(smallestCommons([1, 5])); // 60
