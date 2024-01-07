console.log('TEST Curry join')

// join() = The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

console.log('CASE for joining elements in Curry with "-" should return 10-20-30')
// 10-20-30

var c = new Curry(10, 20, 30)

var newString = c.join('-')

console.log(newString)
// 10-20-30
console.log(c)
// Curry { 0:10, 1:20, 2:30, length: 3}

console.log('CASE for joining elements in Curry with no separator should return 10, 20, 30')
// 10,20,30

var c = new Curry(10, 20, 30)

var newString = c.join()

console.log(newString)
// 10,20,30
console.log(c)
// Curry { 0:10, 1:20, 2:30, length: 3}

console.log('CASE for joining elements in Curry that only has one element return 50')

var c = new Curry('hello')

var newString = c.join('^')

console.log(newString)
// 'hello'

console.log(c)
// Curry { 0: 'hello', length: 1}

console.log('-----------  ---------- ---------')
