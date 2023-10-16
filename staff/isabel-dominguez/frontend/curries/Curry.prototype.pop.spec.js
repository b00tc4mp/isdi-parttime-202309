console.log('TEST Curry pop')
console.log("****************************************************************************************************************************************")

console.log('CASE for elements = ["10, 20, 30"] after use pop results in "30"')

var cPop = new Curry(10, 20, 30)

var result = cPop.pop()
console.log(result)
console.log(cPop)
// 30


console.log('CASE for elements = ["10, 20, 30"] after use pop results in "20"')

var result = cPop.pop()
console.log(result)
console.log(cPop)
// 20


console.log('CASE for elements = ["10, 20, 30"] after use pop results in "10"')

var result = cPop.pop()
console.log(result)
console.log(cPop)
// 10


console.log('CASE for elements = ["10, 20, 30"] after use pop results in "undefined"')

var result = cPop.pop()
console.log(result)
console.log(cPop)
// undefined