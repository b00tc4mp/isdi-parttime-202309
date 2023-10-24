console.log('TEST Curry at')

console.log('CASE returns the item at that index "0" results in "10"')

var c = new Curry(10, 20, 30)
var index = c.at(0)

console.log(index)
// 10
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

console.log('CASE returns the item at that index "2" results in "30"')

var c = new Curry(10, 20, 30)
var index = c.at(2)

console.log(index)
// 30
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

console.log('CASE returns the item at that index "-3" results in "10"')

var c = new Curry(10, 20, 30)
var index = c.at(-3)

console.log(index)
// 10
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }

console.log('CASE returns the item at that index "-1" results in "30"')

var c = new Curry(10, 20, 30)
var index = c.at(-1)

console.log(index)
// 30
console.log(c)
// Curry { 0: 10, 1: 20, 2: 30, length: 3 }