//* Using the Test Method

let testStr = "freeCodeCamp";
let testRegex = /Code/;
let resultat = testRegex.test(testStr);

console.log(resultat); // true 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

console.log(result); // true

let oracion = "Esto es una oracion";
let palabraBuscada = /hola/;
let resultado = palabraBuscada.test(oracion);

console.log(resultado); // false

//* Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
result = waldoRegex.test(waldoIsHiding); // false

// * Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
result = petRegex.test(petString);

console.log(result); // true

// Mais si:

let petString1 = "James has a pet cat.";
let petRegex1 = /dog|turtle|bird|fish/;
result = petRegex1.test(petString);

console.log(result); // false car aucun animal dans la phrase

//* Ignore Case While Matching

myString = "freeCodeCamp";
let fccRegex = /fReECoDecAMp/i;
result = fccRegex.test(myString);

console.log(result); // true car i

//* Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/g;
result = extractStr.match(codingRegex);

console.log(result); // ['coding']

// La syntaxe .match est "l'opposé" de la méthode .test
// ! 'string'.match(/regex/);
// ! /regex/.test('string');

//* Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
result = twinkleStar.match(starRegex);

console.log(result); // ['Twinkle', 'twinkle'] car gi
// ! g pour la répétition des mots et i pour ignorer si majuscule ou minuscule

//* Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // true car .
result = unRegex.test(exampleStr);

console.log(result); // true

// ! peut importe si on a run, sun, fun, pun, nun car le . nous aide reagrouper les mots avec un

//* Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
result = quoteSample.match(vowelRegex);

// ! [aeiou] pour trouver les 5 voyelles dans les mots qu'on cherche
//Exemple: 

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;

let lol = bigStr.match(bgRegex);
let xd = bagStr.match(bgRegex);
let uwu = bugStr.match(bgRegex);
let rt = bogStr.match(bgRegex);

console.log(lol);
console.log(xd);
console.log(uwu);
console.log(rt); // null car la voyelle o se trouve pas dans [aiu]


//* Match Letters of the Alphabet

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result2 = quoteSample.match(alphabetRegex); 

// ! [a-z] pour faire un match des mots qui contient les lettres de a à z

//* Match Numbers and Letters of the Alphabet

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/gi; // donc entre h et s & entre 2 et 6
let result3 = quoteSample.match(myRegex); 

console.log(result3);

//* Match Single Characters Not Specified

 quoteSample = "3 blind mice.";
 myRegex = /[^aeiou^0-9]/gi;
 result = quoteSample.match(myRegex);

 console.log(result);
 // [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']

//* Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
 myRegex = /s+/g; // Le + symbolise la répétition de s, dans ce cas
 result = difficultSpelling.match(myRegex);

console.log(result); // ['ss', 'ss']

// ! le + c'est pour une ou plusieurs fois

//* Match Characters that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // 
result = chewieQuote.match(chewieRegex);

// ! le * c'est pour zéro ou plusieurs fois

//* Find Characters with Lazy Matching

// /t[a-z]*i/ de t à i comme "titani" au lieu de "titanic"...
// mais /t[a-z]*?i/ returne "ti" grâce au ?

let text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/; 
result = text.match(myRegex);

//* Match Beginning String Patterns


let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // ^ avec .test pour chercher le premier mot de la phrase
result = calRegex.test(rickyAndCal);

//* Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // $ pour trouver le mot cette fois à la fin
result = lastRegex.test(caboose);

//* Match All Letters and Numbers

quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
result = quoteSample.match(alphabetRegexV2).length; //! il faut écrire le .length

console.log(result); // 31

// ! [A-Za-z0-9_] === \w

//* Match Everything But Letters and Numbers

quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
result = quoteSample.match(nonAlphabetRegex).length;

console.log(result); // 6 car l'opposé de \w

// ! [^A-Za-z0-9_] === \W

//* Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
result = movieName.match(numRegex).length;

console.log(result); // 4 

// ! [0-9] === \d

//* Match All Non-Numbers

movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
result = movieName.match(noNumRegex).length;

console.log(result); // 17 car l'opposé de \d

//* Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
result = userCheck.test(username);

// Ou:

username = "JackOfAllTrades";
userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; //! Les détails on les voit après
result = userCheck.test(username);

//* Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
result = sample.match(countWhiteSpace);

console.log(result); // [' ', ' ', ' ', ' ', ' ']

//* Match Non-Whitespace Characters

sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
result = sample.match(countNonWhiteSpace);

console.log(result); 
/* ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 
'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p',
'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 
'd', 's'] */

//* Specify Upper and Lower Number of Matches

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // true car 4 "a" donc entre {3, 5}
multipleA.test(A2); // false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // ! attention à cette contruction avec \s
result = ohRegex.test(ohStr);


console.log(result); // true

//* Specify Only the Lower Number of Matches

A4 = "haaaah";
A2 = "haah";
A100 = "h" + "a".repeat(100) + "h"; //! fonction repeat()
multipleA = /ha{3,}h/; //! {3,} signifie au moins trois fois
multipleA.test(A4); // true
multipleA.test(A2); // false 
multipleA.test(A100); // true

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
result = haRegex.test(haStr);

console.log(result); // true

//* Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; //! en revanche, là c'est au plus 4
result = timRegex.test(timStr);

console.log(result); // true


//* Check for All or None

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/; 
//! on se demande s'il existe u dans ce mot
rainbowRegex.test(american); // true
rainbowRegex.test(british); // true

let favWord = "favorite";
let favRegex = /favou?rite/;
result = favRegex.test(favWord);

console.log(result); // true

//* Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
result = pwRegex.test(sampleWord);

console.log(result); // false

//* Check For Mixed Grouping of Characters

testStr = "Pumpkin";
testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // true

myString = "Eleanor Roosevelt";
myRegex = /(Franklin|Eleanor).*Roosevelt/;
result = myRegex.test(myString);

console.log(result); // true

//* Reuse Patterns Using Capture Groups

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // true
repeatStr.match(repeatRegex); // ["row row row", "row

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
result = reRegex.test(repeatNum);

console.log(result); // true

//* Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
result = str.replace(fixRegex, replaceText);

console.log(result); // three two one

//* Remove Whitespace from Start and End


let hello = "   Hello, World!  ";
let wsRegex = /^\s+ | \s+$/g;
result = hello.replace(wsRegex, "");

console.log(result); // Hello, World!

// ? The End :)












