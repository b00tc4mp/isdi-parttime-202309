// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

var arrayToSearchIn = [1, 4, 9, 16];

console.log('CASE TEST - Method Find')
console.log('CASE find element in array [1, 4, 9, 16] to new array with the first elements wich are higher than 5')


// Pass a function to find
var foundValue = find(arrayToSearchIn, function(k) { return k > 5 });
console.log(foundValue)
// Expected output: 9


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')