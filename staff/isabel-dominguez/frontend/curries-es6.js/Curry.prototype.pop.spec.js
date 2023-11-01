TEST(' Curry pop')
console.log("****************************************************************************************************************************************")

CASE('for elements = ["10, 20, 30"] after use pop results in "30"')

let cPop1 = new Curry(10, 20, 30)

let resultPop1 = cPop1.pop()
console.log(resultPop1)
console.log(cPop1)
// 30


CASE('for elements = ["10, 20, 30, 40"] after use pop results in "40"')

let cPop2 = new Curry(10, 20, 30, 40)

let resultPop2 = cPop2.pop()
console.log(resultPop2)
console.log(cPop2)
// 40


CASE('for elements = (1, 3, 7, 9) after use pop results in "9"')

let cPop3 = new Curry(1, 3, 7, 9)

let resultPop3 = cPop3.pop()
console.log(resultPop3)
console.log(cPop3)
// 9


CASE('for elements = () after use pop results in "undefined"')

let cPop4 = new Curry()

let resultPop4 = cPop4.pop()
console.log(resultPop4)
console.log(cPop4)
// undefined