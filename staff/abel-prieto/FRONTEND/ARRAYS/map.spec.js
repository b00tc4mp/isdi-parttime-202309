// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var arrayToMap = [1, 4, 9, 16];

console.log('CASE TEST - Method Map')
console.log('CASE map array [1, 4, 9, 16] to new array with elements multiplied by two')


// Pass a function to map
var mappedArray = map(arrayToMap, function(x) { return x * 2 });

console.log(mappedArray)
// Expected output: Array [2, 8, 18, 32]

var mappedArray2 = map(arrayToMap, function(y) {
    return y * 5
})

console.log(mappedArray2)
// Expected output: Array [5, 20, 45, 80]

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')