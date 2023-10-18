console.log('TEST Curry pop')

//pop() = The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

console.log(
  'CASE extract last element from curry {10, 20, 30} should return 30'
)
// 30

var c = new Curry(10, 20, 30)

var lastElement = c.pop()

console.log(lastElement)
// 30
console.log(c)
// Curry { 0:10, 1:20 length: 2}

console.log('CASE for pop empty array should return undefined')
// 30

var c = new Curry()

var lastElement = c.pop()

console.log(lastElement)
// 30
console.log(c)
// Curry { 0:10, 1:20 length: 2}

console.log('-----------  ---------- ---------')
