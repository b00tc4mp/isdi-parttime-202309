/*El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin 
(fin no incluido). El array original no se modificará.*/

console.log('TEST slice()')
console.log('CASE slice() array [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], with the parameters [1, 3], the new array will be: [20, 40]')

var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var keepIndex = [1, 3]
console.log(slice(keepIndex))
// Expected output: Array [20, 40]


console.log('TEST slice()')
console.log('CASE slice() array [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], with the parameters [-4, -1], the new array will be: [70, 100]')
var keepIndex = [-4, -1]
console.log(slice(keepIndex))
// Expected output: Array [70, 100]


console.log('TEST slice()')
console.log('CASE slice() array [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], with the parameters [-4, -1, 2], the new array will be: [70, 100, 30]')
var keepIndex = [-4, -1, 2]
console.log(slice(keepIndex))
// Expected output: Array [70, 100, 30]
