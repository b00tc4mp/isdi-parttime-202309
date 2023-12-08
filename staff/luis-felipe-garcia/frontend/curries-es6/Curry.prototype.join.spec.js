TEST(' Curry join')
let curryItemToJoin = new Curry(0, 1, 'Hola', 'mundo')

CASE(" for curryItemToJoin = [0, 1, 'Hola', 'mundo'] y element = '-' results is '0-1-Hola-mundo'")
console.log(curryItemToJoin.join('-'))
//'0-1-Hola-mundo'

CASE(" for curryItemToJoin = [0, 1, 'Hola', 'mundo'] y element = ' ' results is '0 1 Hola mundo'")
console.log(curryItemToJoin.join(' '))
//'0 1 Hola mundo'

let curryItemEmpty = new Curry()
CASE(" for curryItemEmpty = [] y element = '-' results is '-'")
console.log(curryItemEmpty.join('-'))
//'-'


CASE(" for curryItemToJoin = [0, 1, 'Hola', 'mundo'] y element = '' results is '0,1,Hola,mundo'")
console.log(curryItemToJoin.join(''))
//'0 1 Hola mundo'


console.log('-----------------------------------------')