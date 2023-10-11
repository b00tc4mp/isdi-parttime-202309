// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log('TEST ARRAYS - Method Slice')

console.log('CASE for the array, extract on a new array from array[1] to array[5], last not included')
// Expected output: [20, 30, 40, 50]

console.log(slice(array, 1, 5))

console.log('CASE for the array, extract on a new array from array[4] to array[9], last not included')
// Expected output: [50, 60, 70, 80, 90]

console.log(slice(array, 4, 9))

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')