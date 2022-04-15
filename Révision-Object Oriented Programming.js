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
 
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

//* Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
  }
  
  let labrador = new Dog("Ben");
  
  console.log(Dog.prototype.isPrototypeOf(labrador)); // true

//* Understand the Prototype Chain

function Dog(name) {
    this.name = name;
  }
  
  beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  
  
  console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true

//* Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
   eat: function() {
    console.log("hey hey!"); 
    //! eat va être là au lieu d'être dans Cat.prototype ou Bear.prototype
  }

};

//* Inherit Behaviors from a Supertype

Bear = Object.create(Animal.prototype);
Bear.eat(); // hey hey!

Cat = Object.create(Animal.prototype);
Cat.eat(); // hey hey!


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
beagle = Object.create(Animal.prototype);

duck.eat(); // nom nom nom
beagle.eat(); // nom nom nom

//* Set the Child's Prototype to an Instance of the Parent

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

beagle = new Dog();
beagle.eat(); // nom nom nom

//* Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

duck = new Bird();
beagle = new Dog();

//* Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
}

beagle = new Dog();

beagle.eat(); // nom nom nom
beagle.bark(); // Woof!

//* Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

let penguin = new Penguin();
console.log(penguin.fly()); //Alas, this is a flightless bird.

//* Use a Mixin to Add Common Behavior Between Unrelated Objects

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

console.log(bird.fly()); // undefined
plane.fly();

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding!");
  };
};

glideMixin(bird);
glideMixin(boat);

//* Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}
function Bird() {
  let weight = 15;
  
  this.getWeight = () => weight;  
}

//* Understand the Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("Chirp, chirp!");

})(); // Chirp, chirp!


(function () {
  console.log(":o");

})();

( () => console.log("XD") )();

//On a une focntion non anonyme et qui n'est pas IIFE
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

//À la place on a:
(function () {
  console.log("A cozy nest is ready");
})();

//* Use an IIFE to Create a Module

let funModule = ( () => {
  return {

    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },

    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune"); }
    }
  }
})(); //! (obj) à la place de function(obj)
