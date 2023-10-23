TEST(' Curry indexOf')
console.log("****************************************************************************************************************************************")

CASE('for new Curry(10, 20, 30) indexOf "10" results in 0')

let cIndexOf = new Curry(10, 20, 30)

let result = cIndexOf.indexOf(10)
console.log(result)
// 0

CASE('for new Curry(10, 20, 30) indexOf "30" results in 2')

let cIndexOf = new Curry(10, 20, 30)

let result = cIndexOf.indexOf(30)
console.log(result)
// 2

CASE('for new Curry(10, 20, 30) indexOf "40" results in -1')

let cIndexOf = new Curry(10, 20, 30)

let result = cIndexOf.indexOf(40)
console.log(result)
// -1
