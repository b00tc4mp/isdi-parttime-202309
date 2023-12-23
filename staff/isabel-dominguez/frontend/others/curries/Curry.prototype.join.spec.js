console.log('TEST Curry join')
console.log("****************************************************************************************************************************************")

console.log('CASE for elements = ["10, 20, 30"] results in "102030"')

var cJoin = new Curry(10, 20, 30)

var result = cJoin.join('')
console.log(result)
// 102030


console.log('CASE for elements = ["10, 20, 30"] results in "10-20-30"')

var cJoin = new Curry(10, 20, 30)

var result = cJoin.join('-')
console.log(result)
// 10-20-30


console.log('CASE for elements = ["10, 20, 30"] results in "10**20**30"')

var cJoin = new Curry(10, 20, 30)

var result = cJoin.join('**')
console.log(result)
// 10**20**30


console.log('CASE for elements = ["10, 20, 30"] results in "10,20,30"')

var cJoin = new Curry(10, 20, 30)

var result = cJoin.join()
console.log(result)
// 10,20,30