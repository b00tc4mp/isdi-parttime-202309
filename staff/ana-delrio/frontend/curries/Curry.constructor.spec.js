console.log('TEST Curry constructor')

console.log('CASE construct curry with 3 arguments 10, 20, and 30')

// estamos creando una nueva instancia de objeto 'curry'
// con 3 valores como arguments (10, 20, y 30)
// la variable c se asigna para ahcer referencia a esta nueva instancia
var c = new Curry(10, 20, 30)

console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }


console.log('-------------------------------------------------')


console.log('CASE construct curry with 1 argument that is a positive integer')

// Crea una instancia de la función Curry con un argumento de valor 100
var c = new Curry(100)

console.log(c)
// Curry { length: 100 } 


console.log('-------------------------------------------------')


console.log('CASE construct curry with 1 argument that is not a positive integer, but a boolean')


// Crea una instancia de la función Curry con un argumento de valor 'true'
var c = new Curry(true)

console.log(c)
// Curry { 0: true, length: 1 }


console.log('-------------------------------------------------')


console.log('CASE construct curry with 1 argument that is not a positive integer, but a string')

var c = new Curry('hello')

console.log(c)
// Curry { 0: 'hello', length: 1 }


console.log('-------------------------------------------------')


console.log('CASE constructor fails with 1 argument that is a negative integer')

try {
    // Intenta crear una instancia de la función Curry con un argumento -1 (número entero negativo)
    new Curry(-1)
} catch (error) {
    // Captura cualquier error lanzado y lo imprime en la consola
    console.log(error)
    // RangeError: Invalid curry length
}


console.log('-------------------------------------------------')


console.log('CASE constructor fails with 1 argument that is a positive number, not integer')

try {
    // Intenta crear una instancia de la función Curry con un argumento 1.234 (número positivo no entero)
    new Curry(1.234)
} catch (error) {
    // Captura cualquier error lanzado y lo imprime en la consola
    console.log(error)
    // RangeError: Invalid curry length
}