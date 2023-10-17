console.log('TEST Curry pop')

console.log('CASE remove 1 element')

var c = new Curry(10, 20, 30)

var removed = c.pop()

console.log(removed)
// 30

console.log(c)
// Curry { 0: 10, 1: 20, length: 2 }

console.log('CASE curry is empty')

var c2 = new Curry()

var removed2 = c2.pop()

console.log(removed2)
// undefined

console.log(c2)
// {length : 0}
