// El método map() en JavaScript se utiliza para crear un nuevo array a partir de otro array existente. 
// Lo que hace es aplicar una función a cada elemento del array original y devolver un nuevo array 
// con los resultados de aplicar esa función a cada uno de los elementos
// El array original no se modifica, y el nuevo array resultante tiene la misma longitud que el A original. 


console.log('TEST map')
console.log('CASE for map array [1, 4, 9, 16] to new array with element mutiplied by 2')

// DECLARACION de un array
var arrayToMap = [1, 4, 9, 16]

//LLAMAMOS a una función llamada "map" pasando "arrayToMap" y una función de callback como argumentos
var mappedArray = map(arrayToMap, function (x) { return x * 2 })

console.log(mappedArray)

// Expected output: Array [2, 8, 18, 32]


