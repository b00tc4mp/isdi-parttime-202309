console.log('TEST map');

// Array original
var a = [1, 4, 9, 16];

// Primer caso de prueba: Multiplicar cada elemento por 2
console.log('CASE map array [1, 4, 9, 16] to new array with elements multiplied by 2 in the console');

var mappedArray1 = map(a, function(x) { return x * 2; });
console.log(mappedArray1);

// Segundo caso de prueba: Multiplicar cada elemento por 5
console.log('CASE map array [1, 4, 9, 16] to new array with elements multiplied by 5 in the console');

var mappedArray2 = map(a, function(x) { return x * 5; });
console.log(mappedArray2);

// Tercer caso de prueba: Dividir cada elemento por 2
console.log('CASE map array [1, 4, 9, 16] to new array with elements divided by 2 in the console');

var mappedArray3 = map(a, function(x) { return x / 2; });
console.log(mappedArray3);