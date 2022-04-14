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
