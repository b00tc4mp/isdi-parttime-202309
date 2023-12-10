// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

var arrayToFilter = [1, 4, 9, 16];

console.log('CASE TEST - Method Filter')
console.log('CASE filter array [1, 4, 9, 16] to new array with elements wich are higher than 5')


// Pass a function to map
var fileredArray = filter(arrayToFilter, function(x) { return x > 5 });
console.log(fileredArray)
// Expected output: Array [9,16]


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')