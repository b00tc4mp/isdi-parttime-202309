console.log('TEST Curry indexOf')
console.log("****************************************************************************************************************************************")

console.log('CASE for new Curry(10, 20, 30) indexOf "10" results in 0')

var cIndexOf = new Curry(10, 20, 30)

var result = cIndexOf.indexOf(10)
console.log(result)
// 0

console.log('CASE for new Curry(10, 20, 30) indexOf "30" results in 2')

var cIndexOf = new Curry(10, 20, 30)

var result = cIndexOf.indexOf(30)
console.log(result)
// 2

console.log('CASE for new Curry(10, 20, 30) indexOf "40" results in -1')

var cIndexOf = new Curry(10, 20, 30)

var result = cIndexOf.indexOf(40)
console.log(result)
// -1
