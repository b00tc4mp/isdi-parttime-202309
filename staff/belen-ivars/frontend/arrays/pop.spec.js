

console.log('TEST Pop - array')
console.log("array1 = [0, 1, 'Hola', 'mundo']")
var array = [0, 1, 'Hola', 'mundo']


console.log("CASE for Pop (array1) results is 'mundo'")
console.log(pop(array))
//'mundo' & array.length = 3

console.log("CASE for Pop (array1) results is [0, 1, 'Hola']")
console.log(pop(array))
//'Hola' & array.length = 2

console.log("CASE for Pop ([]) results is 'undefined'")
console.log(pop([]))
//'undefined'