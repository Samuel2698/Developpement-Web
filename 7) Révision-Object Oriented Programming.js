//* Create a Basic JavaScript Object

let perro = {
    nombre: "Itachi",
    patas: 4
  };

//* Use Dot Notation to Access the Properties of an Object

let dog = {
    name: "Spot",
    numLegs: 4
  };

console.log(dog.name, dog.numLegs); // Spot 4

//* Create a Method on an Object

let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog2.numLegs + " legs.";}
  };
  
  console.log(dog2.sayLegs()); // This dog has 4 legs.

//* Make Code More Reusable with the this Keyword

let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  //! c'est une meilleur idée d'utiliser this. car le nom de l'objet peut changer
  dog3.sayLegs();

//* Define a Constructor Function

function Dog() {

    this.name = "Firulais",
    this.color = "Amarillo",
    this.numLegs = 5;
  }

//* Use a Constructor to Create Objects

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

  let hound = new Dog();
  
//* Extend Constructors to Receive Arguments

function Perro(name, color) {

    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

 let golden = new Perro("Tyson", "Yellow");
 console.log(golden); // Perro {name: 'Tyson', color: 'Yellow', numLegs: 4}

//* Verify an Object's Constructor with instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(5);
  console.log(myHouse instanceof House); // true
  
function Casa(numeroDeHabitaciones) {
    this.numeroDeHabitaciones = numeroDeHabitaciones;
}

 let miCasa = new Casa(4);
 console.log(miCasa instanceof Casa); // true

//* Understand Own Properties

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");

 let ownProps = [];

 for (let property in canary) {
     if (canary.hasOwnProperty(property)) {
         ownProps.push(property);
     }
 }
 
  console.log(ownProps); // ['name', 'numLegs']

//* Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numEyes = 2;
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");

  console.log(beagle.numEyes); // 2
  console.log(beagle.numLegs); // 4

//* Iterate Over All Properties

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  beagle = new Dog("Snoopy");
  
  ownProps = [];
  let prototypeProps = [];
  
  for (let property in beagle) {
      if (beagle.hasOwnProperty(property)) {
          ownProps.push(property);

      } else {
          prototypeProps.push(property);
      }
  }

  console.log(ownProps);
  console.log(prototypeProps);

//* Understand the Constructor Property
function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
  
    } else {
      false;
    }
  }

function Dog(name) {
    this.name = name;
  }

  function joinDogFraternity(candidate) {
      return candidate.constructor === Dog ? true : false;
  }

//* Change the Prototype to a New Object

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  
  };

//* Remember to Set the Constructor Property when Changing the Prototype
 