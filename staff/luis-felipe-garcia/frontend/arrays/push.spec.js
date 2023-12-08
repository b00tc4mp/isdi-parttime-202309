console.log('TEST push - array')
console.log("array1 = [0, 1, 'Hola', 'mundo']")
var array1 = [0, 1, 'Hola', 'mundo']

console.log("CASE for push(array1, 'new element') results is [0, 1, 'Hola', 'new element']")
console.log(push(array1, 'new element'))
//[0, 1, 'Hola', 'new element']

console.log("CASE for push(array1, vegetables) results is [0, 1, 'Hola', 'parsnip', 'potato']")
var vegetables = ["parsnip", "potato"]
console.log(push(array1, vegetables))

console.log('-----------------------------------------')