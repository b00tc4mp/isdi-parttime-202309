console.log('TEST Curry filter')

console.log(
  'CASE for filter c array to new array with values under 50 should return [10, 20, 30, 40]'
)

var c = new Curry(10, 20, 30, 40, 50, 60)

function isSmallerThan50(x) {
  return x < 50
}

var filteredArray = c.filter(isSmallerThan50)

console.log(filteredArray)
// [10, 20, 30, 40]
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 3}

console.log(
  'CASE for filter c array to new array with values over 50 should return [60]'
)

var c = new Curry(10, 20, 30, 40, 50, 60)

function isGreaterThan50(x) {
  return x > 50
}

var filteredArray = c.filter(isGreaterThan50)

console.log(filteredArray)
// [60]
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 3}

console.log('-----------  ---------- ---------')
