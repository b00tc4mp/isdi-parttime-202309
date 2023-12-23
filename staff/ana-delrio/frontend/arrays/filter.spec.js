// es una función de los arrays que se utiliza para crear un nuevo array con todos los elementos que cumplan con ciertos 
// criterios específicos definidos en una función de filtrado (callback)

console.log('TEST filter')
console.log('CASE filter array [1, 4, 9, 16] to new array with element >5 ')

// DEFINIMOS un array llamado "arrayToFilter" que contiene cuatro números
var arrayToFilter = [1, 4, 9, 16]

// LLAMAMOS a una función llamada "filter" pasando "arrayToFilter" y una función de callback llamada "isGreaterThan5" como argumentos
var filteredAarray = filter(arrayToFilter, isGreaterThan5)


// DEFINIMOS una función llamada "isGreaterThan5" que toma un número como argumento y devuelve true si ese número es mayor que 5, de lo contrario, devuelve false
function isGreaterThan5(x) {
    return x > 5
}

console.log(filteredAarray)
// Expected outpout: Array [9, 16]