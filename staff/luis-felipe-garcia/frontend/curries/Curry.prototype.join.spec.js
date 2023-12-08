console.log('TEST Curry join')
var curryItem = new Curry(0, 1, 'Hola', 'mundo')

console.log("CASE for curryItem = [0, 1, 'Hola', 'mundo'] y element = '-' results is '0-1-Hola-mundo'")
console.log(curryItem.join('-'))
//'0-1-Hola-mundo'

console.log("CASE for curryItem = [0, 1, 'Hola', 'mundo'] y element = ' ' results is '0 1 Hola mundo'")
console.log(curryItem.join(' '))
//'0 1 Hola mundo'

var curryItemEmpty = new Curry()
console.log("CASE for curryItemEmpty = [] y element = '-' results is '-'")
console.log(curryItemEmpty.join('-'))
//'-'


console.log("CASE for curryItem = [0, 1, 'Hola', 'mundo'] y element = '' results is '0,1,Hola,mundo'")
console.log(curryItem.join(''))
//'0 1 Hola mundo'


console.log('-----------------------------------------')