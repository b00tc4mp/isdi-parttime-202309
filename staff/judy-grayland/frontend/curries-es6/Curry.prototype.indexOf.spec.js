TEST('Curry indexOf')

CASE('c Curry indexOf 20 should return 1')

var c = new Curry(10, 20, 30)

var index = c.indexOf(20)

console.log(index)
// 1
console.log(c)
// Curry { 0:10, 1:20, 2: 30, length: 3}

CASE('c Curry indexOf 40 should return -1')

var c = new Curry(10, 20, 30)

var index = c.indexOf(40)

console.log(index)
// -1
console.log(c)
// Curry { 0:10, 1:20, 2: 30, length: 3}

console.log('-----------  ---------- ---------')
