console.log('TEST at - array')

var array = [0, 1, 'Hola', 'mundo']

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] with index (1) results is 1")
console.log(at(array, 1))
//1

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] with index (2) results is 'Hola'")
console.log(at(array, 2))
//'Hola'

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] with index (-1) results is 'mundo'")
console.log(at(array, -1))
//'mundo'

console.log("CASE for array = [0, 1, 'Hola', 'mundo'] with index (6) results is 'undefined'")
console.log(at(array, 6))
//'Undefined'