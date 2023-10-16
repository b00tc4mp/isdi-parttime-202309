console.log('TEST Curry pop')
console.log("****************************************************************************************************************************************")

console.log('CASE for elements = ["10, 20, 30"] after use pop results in "30"')

var cPop = new Curry(10, 20, 30)

var result = cPop.pop()
console.log(result)
console.log(cPop)
// 30


console.log('CASE for elements = ["10, 20, 30, 40"] after use pop results in "40"')

var cPop = new Curry(10, 20, 30, 40)

var result = cPop.pop()
console.log(result)
console.log(cPop)
// 40


console.log('CASE for elements = (1, 3, 7, 9) after use pop results in "9"')

var cPop = new Curry(1, 3, 7, 9)

var result = cPop.pop()
console.log(result)
console.log(cPop)
// 9


console.log('CASE for elements = () after use pop results in "undefined"')

var cPop = new Curry()

var result = cPop.pop()
console.log(result)
console.log(cPop)
// undefined