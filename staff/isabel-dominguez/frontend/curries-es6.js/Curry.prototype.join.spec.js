TEST(' Curry join')
console.log("****************************************************************************************************************************************")

CASE('for elements = ["10, 20, 30"] results in "102030"')

let cJoin = new Curry(10, 20, 30)

let result = cJoin.join('')
console.log(result)
// 102030


CASE('for elements = ["10, 20, 30"] results in "10-20-30"')

let cJoin = new Curry(10, 20, 30)

let result = cJoin.join('-')
console.log(result)
// 10-20-30


CASE('for elements = ["10, 20, 30"] results in "10**20**30"')

let cJoin = new Curry(10, 20, 30)

let result = cJoin.join('**')
console.log(result)
// 10**20**30


CASE('for elements = ["10, 20, 30"] results in "10,20,30"')

let cJoin = new Curry(10, 20, 30)

let result = cJoin.join()
console.log(result)
// 10,20,30