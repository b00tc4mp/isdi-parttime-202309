TEST('Curry find')

CASE('Find in Curry [1, 4, 9, 16] the first element larger than 3 should return 4')

var c = new Curry(1, 4, 9, 16)

var foundValue = c.find(isGreaterThan3)

function isGreaterThan3(x) {
  return x > 3
}

console.log(foundValue)
//4

CASE('Find in Curry [1, 4, 9, 16] the first element smaller than 10 should return 1')

var c = new Curry(1, 4, 9, 16)

var foundValue = c.find(isSmallerThan10)

function isSmallerThan10(x) {
  return x < 10
}

console.log(foundValue)
//1

CASE('Find in Curry [1, 4, 9, 16] the first element larger than 20 should return undefined')
var c = new Curry(1, 4, 9, 16)

var foundValue = c.find(isGreaterThan20)

function isGreaterThan20(x) {
  return x > 20
}

console.log(foundValue)
//undefined

console.log('-----------  ---------- ---------')
