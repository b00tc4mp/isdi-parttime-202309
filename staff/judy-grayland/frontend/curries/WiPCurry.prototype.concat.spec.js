console.log('TEST Curry concat')
// concat() = The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

console.log(
  'CASE for concat c and d array should return the new array [10, 20, 30, 40, 50, 60, 70]'
)

var c = new Curry(10, 20, 30, 40)
var d = new Curry(50, 60, 70)

var result = c.concat(d)

console.log(result)
// [10, 20, 30, 40, 50, 60, 70]
console.log(c)
// Curry { 0:10, 1:20, 2: 30, 3: 40, length: 3}

console.log(
  'CASE for concat c, d and e array should return the new array [10, 20, 30, 40, 50, 60, 70, 80]'
)

var c = new Curry(10, 20, 30, 40)
var d = new Curry(50, 60, 70)
var e = new Curry(80)

var result = c.concat(d, e)

console.log(result)
// [10, 20, 30, 40, 50, 60, 70, 80]
console.log(c)
// Curry { 0:10, 1:20, 2: 30, 3: 40, length: 3}
