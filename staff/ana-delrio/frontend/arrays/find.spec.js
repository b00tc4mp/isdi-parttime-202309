// es una función de los arrays en JavaScript que se utiliza para buscar el primer elemento en un array 
// que cumple con ciertos criterios definidos en una función de prueba (callback)


console.log('TEST find')
console.log('CASE find array [1, 4, 9, 16] to to the first element > 5')


var arrayToSearchIn = [1, 4, 9, 16]

// LLAMAMOS a la función "find" pasando el array "arrayToSearchIn" y la función "isGreaterThan5" como argumentos
var foundvalue = find(arrayToSearchIn, isGreaterThan5)

// DEFININIMOS una función llamada "isGreaterThan5" que toma un argumento "x" y devuelve true si "x" es mayor que 5
function isGreaterThan5(x) {
    return x > 5
}

console.log(foundvalue)
// Expected output: 9



console.log('CASE find array [1, 4, 9, 16] to to the first element > 50')

var arrayToSearchIn = [1, 4, 9, 16]

var foundvalue = find(arrayToSearchIn, isGreaterThan50)

function isGreaterThan50(x) {
    return x > 50
}

console.log(foundvalue)
// Expected output: undefined