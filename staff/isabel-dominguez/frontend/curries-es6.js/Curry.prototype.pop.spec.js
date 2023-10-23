TEST(' Curry pop')
console.log("****************************************************************************************************************************************")

CASE('for elements = ["10, 20, 30"] after use pop results in "30"')

let cPop = new Curry(10, 20, 30)

let result = cPop.pop()
console.log(result)
console.log(cPop)
// 30


CASE('for elements = ["10, 20, 30, 40"] after use pop results in "40"')

let cPop = new Curry(10, 20, 30, 40)

let result = cPop.pop()
console.log(result)
console.log(cPop)
// 40


CASE('for elements = (1, 3, 7, 9) after use pop results in "9"')

let cPop = new Curry(1, 3, 7, 9)

let result = cPop.pop()
console.log(result)
console.log(cPop)
// 9


CASE('for elements = () after use pop results in "undefined"')

let cPop = new Curry()

let result = cPop.pop()
console.log(result)
console.log(cPop)
// undefined