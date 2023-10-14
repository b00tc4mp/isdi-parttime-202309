// El método forEach es un método incorporado en JavaScript que se utiliza en arrays
// para iterar sobre cada elemento del array y ejecutar una función de callback en cada uno de ellos
// A diferencia del método map, forEach no crea un nuevo array con los resultados de la función de callback

console.log('TEST forEach')

console.log('CASE for each element in [10, 20, 30] print it in the console')


// DECLARACION de un array llamado 'a' con valores [10, 20, 30]
var a = [10, 20, 30]

// Llamada a la función 'forEach' con el array 'a' y una función de callback anónima
forEach(a, function (v) {
    // En cada iteración, esta función de callback imprime el valor 'v' en la consola
    console.log(v)
})


console.log('CASE for each element in [10, 20, 30] print it multiplied by 10 in the console')

var a = [10, 20, 30]

forEach(a, function (v) {
    console.log(v * 10)
})