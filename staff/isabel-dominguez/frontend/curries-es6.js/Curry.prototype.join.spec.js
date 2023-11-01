TEST(' Curry join')
console.log("****************************************************************************************************************************************")

CASE('for elements = ["10, 20, 30"] results in "102030"')

let cJoin1 = new Curry(10, 20, 30)

let resultJoin1 = cJoin1.join('')
console.log(resultJoin1)
// 102030


CASE('for elements = ["10, 20, 30"] results in "10-20-30"')

let cJoin2 = new Curry(10, 20, 30)

let resultJoin2 = cJoin2.join('-')
console.log(resultJoin2)
// 10-20-30


CASE('for elements = ["10, 20, 30"] results in "10**20**30"')

let cJoin3 = new Curry(10, 20, 30)

let resultJoin3 = cJoin3.join('**')
console.log(resultJoin3)
// 10**20**30


CASE('for elements = ["10, 20, 30"] results in "10,20,30"')

let cJoin4 = new Curry(10, 20, 30)

let resultJoin4 = cJoin4.join()
console.log(resultJoin4)
// 10,20,30