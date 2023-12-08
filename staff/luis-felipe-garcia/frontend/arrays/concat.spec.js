console.log('TEST concat - array')
console.log("array1 = [0, 1, 'Hola', 'mundo']")
console.log("array2 = ['this', 'is', 'a', 'test']")
console.log("array3 = ['of', 'coding', 'a', 'Js', 'method']")

var array1 = [0, 1, 'Hola', 'mundo'] 
var array2 = ['this', 'is', 'a', 'test']
var array3 = ['of', 'coding', 'a', 'Js', 'method']

console.log("CASE for concat(array1, array2, array3) results is [0, 1, 'Hola', 'mundo', 'this', 'is', 'a', 'test', 'of', 'coding', 'a', 'Js', 'method']")
console.log(concat(array1, array2, array3))
//[0, 1, 'Hola', 'mundo', 'this', 'is', 'a', 'test', 'of', 'coding', 'a', 'Js', 'method']

console.log('-----------------------------------------')