TEST('Curry filter')

CASE('Filter Curry c to new Curry with values under 50 should return { 0: 10, 1: 20, 2: 30, 3: 40, length: 4}')

var c = new Curry(10, 20, 30, 40, 50, 60)

function isSmallerThan50(x) {
  return x < 50
}

var filteredArray = c.filter(isSmallerThan50)

console.log(filteredArray)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, length: 4}
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}

CASE('Filter Curry c to new Curry with values over 50 should return Curry { 0: 60, length: 1}')

var c = new Curry(10, 20, 30, 40, 50, 60)

function isGreaterThan50(x) {
  return x > 50
}

var filteredArray = c.filter(isGreaterThan50)

console.log(filteredArray)
// Curry { 0: 60, length: 1}
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}

console.log('-----------  ---------- ---------')
