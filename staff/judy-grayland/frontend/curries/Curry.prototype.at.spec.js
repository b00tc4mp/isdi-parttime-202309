console.log('TEST Curry at')

console.log('CASE for c array at index 1 should return 20')

var c = new Curry(10, 20, 30)

var item = c.at(1)

console.log(item)
// 20
console.log(c)
// Curry { 0:10, 1:20, 2: 30, length: 3}

console.log('CASE for c array at index -3 should return 10')

var c = new Curry(10, 20, 30)

var item = c.at(-3)

console.log(item)
// 10
console.log(c)
// Curry { 0:10, 1:20, 2: 30, length: 3}

console.log('CASE for c array at index 5 should return undefined')

var c = new Curry(10, 20, 30)

var item = c.at(5)

console.log(item)
// undefined
console.log(c)
// Curry { 0:10, 1:20, 2: 30, length: 3}

console.log('-----------  ---------- ---------')
