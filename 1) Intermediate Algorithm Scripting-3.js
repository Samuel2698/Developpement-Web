//* Drop it

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
  }
  
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  // [ 1, 2, 3 ]

//* Steamroller

function steamrollArray(arr) {
    const flattenedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
        
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  // [ 1, 2, 3, 4 ]

function aplanadora(arr) {
    const matrizAplanada = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            matrizAplanada.push(...aplanadora(arr[i]));

        } else {
            matrizAplanada.push(arr[i]);
        }
    }
    return matrizAplanada;
}
console.log(aplanadora([1, 2, [3, 4], 5]));
// [1, 2, 3, 4, 5]

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
console.log(steamrollArray([7, [1, [2], [3, 4, 5], 6], 8]));
// [7, 1, 2, 3, 4, 5, 6, 8]

function laAplanadora(arr) {
    const plano = [].concat(...arr);
    return plano.some(Array.isArray) ? laAplanadora(plano) : plano; 
    }
console.log(laAplanadora([7, [1, [2], [3, 4, 5], 6], 8]));

//* Binary Agents

function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
  }
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

function traductorBinario(str) {
    return String.fromCharCode(...str.split(" ").map(function (char) {
        return parseInt(char, 2);
    }))
}
console.log(traductorBinario("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Aren't bonfires fun!?

//* Everything Be True

function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
// false

function chequeoDeLaVerdad(coleccion, pre) {
  return coleccion.every(x => x[pre]);
}
console.log(chequeoDeLaVerdad([{name: "Quincy", role: "Founder", isBot: "isBot"}, {name: "Naomi", role: "manager", isBot: "isBot"}, {name: "Camperbot", role: "Bot", isBot: "isBot"}], "isBot"));
// true

//* Arguments Optional

function addTogether() {
  const [first, second] = arguments;

  if (typeof(first) !== "number")
    return undefined;

  if (second === undefined)
    return (second) => addTogether(first, second);

  if (typeof(second) !== "number")
    return undefined;

  return first + second;
}
console.log(addTogether(2,3)); // 5

function lesAdditionner() {
  const [première, deuxième] = arguments;

  if (typeof(première) !== "number")
    return undefined;

  if (deuxième === undefined) 
    return (deuxième) => lesAdditionner(première, deuxième);

  if (typeof(deuxième) !== "number")
    return undefined;

  return première + deuxième;
}
console.log(lesAdditionner(2));
// (deuxième) => lesAdditionner(première, deuxième)

//* Make a Person

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());

const Persona = function(primeroYElUltimo) {
  let nombreCompleto = primeroYElUltimo;

  this.obtenerNombre = () => nombreCompleto.split(" ")[0];

  this.obtenerApellido = () => nombreCompleto.split(" ")[1];

  this.obtenerNombreCompleto = () => nombreCompleto;

  this.darNombre = (name) => nombreCompleto = name + " " + nombreCompleto.split(" ")[1];

  this.darApellido = (name) => nombreCompleto = nombreCompleto.split(" ")[0] + " " + name;

  this.darNombreCompleto = (name) => nombreCompleto = name;

};

const max = new Persona('Max Power');
console.log(max.obtenerNombreCompleto());
// Max Power

const Personita = function(elPrimeroYElSegundo) {
  let nombreCompleto = elPrimeroYElSegundo;

  this.obtenerNombre = () => nombreCompleto.split(" ")[0];

  this.obtenerApellido = () => nombreCompleto.split(" ")[1];

  this.obtenerNombreCompleto = () => nombreCompleto;

  this.darNombre = (name) => nombreCompleto = name + " " + nombreCompleto.split(" ")[1];

  this.darApellido = (name) => nombreCompleto = nombreCompleto.split(" ")[0] + " " + name;

  this.darNombreCompleto = (name) => nombreCompleto = name;
}

const armando = new Personita('Armando Casas');
console.log(armando.obtenerNombreCompleto());
// Armando Casas

