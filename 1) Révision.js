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

