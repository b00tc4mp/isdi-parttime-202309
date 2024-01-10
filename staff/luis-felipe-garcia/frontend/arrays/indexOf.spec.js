console.log('TEST IndexOf - array')
var array = [0, 1, 'Hola', 'mundo'] 

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] indexOf(1) results is 1")
console.log(indexOf(array, 1))
//1

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] indexOf('Hola') results is 2")
console.log(indexOf(array, 'Hola'))
//2

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] indexOf('Element which not exist') results is -1")
console.log(indexOf(array, 4))
//-1

console.log('-----------------------------------------')


