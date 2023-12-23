TEST(' Curry indexOf')
console.log("****************************************************************************************************************************************")

CASE('for new Curry(10, 20, 30) indexOf "10" results in 0')

let cIndexOf1 = new Curry(10, 20, 30)

let resultIndexOf1 = cIndexOf1.indexOf(10)
console.log(resultIndexOf1)
// 0

CASE('for new Curry(10, 20, 30) indexOf "30" results in 2')

let cIndexOf2 = new Curry(10, 20, 30)

let resultIndexOf2 = cIndexOf2.indexOf(30)
console.log(resultIndexOf2)
// 2

CASE('for new Curry(10, 20, 30) indexOf "40" results in -1')

let cIndexOf3 = new Curry(10, 20, 30)

let resultIndexOf3 = cIndexOf3.indexOf(40)
console.log(resultIndexOf3)
// -1
