
TEST('Curries - Method push')

CASE('Push 1 element')

var c = new Curry(10, 20, 30)
var length = c.push(40)

console.log(length)
// 4
console.log(c)
// Curry {0: 10, 1: 20, 2: 30, 3: 40, length: 4}

CASE('Push 3 element')

var c = new Curry(10, 20, 30)
var length = c.push(40, 50, 60)

console.log(length)
// 6

console.log(c)
// Curry {0: 10, 1: 20, 2: 30, 3: 40, 4: 50, 5: 60, length: 6}

CASE('Push NO element')

var c = new Curry(10, 20, 30)
var length = c.push()

console.log(length)
// 3

console.log(c)
// Curry {0: 10, 1: 20, 2: 30, length: 3}



console.log('- - - - - - - - - - - - - - - - - - - - - - - -')