console.log('TEST Curry.prototype pop')

console.log('CASE extract last element from curry { 10, 20, 30 }')

// Creamos una instancia de "Curry" con tres valores: 10, 20 y 30
var nums = new Curry(10, 20, 30)
// Llamamos al método "pop" en el objeto "nums" para extraer el último elemento
var extracted = nums.pop()

console.log(extracted)
// 30

console.log(nums)
// Curry { 0: 10, 1: 20, length: 2 }


console.log('-------------------------------------------------')


console.log('CASE extract no element (undefined) from curry {}')

var empty = new Curry

var extracted = empty.pop()

console.log(extracted)
// undefined

console.log(empty)
// Curry { length: 0 }