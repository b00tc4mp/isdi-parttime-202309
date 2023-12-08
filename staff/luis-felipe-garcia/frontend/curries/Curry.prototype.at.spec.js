console.log('TEST Curry at')

console.log('TEST at - curryItem')
var curryItem = new Curry (0, 1, 'Hola', 'mundo')

console.log("CASE for curryItem = [0, 1, 'Hola', 'mundo'] curryItem.at(1) results is 1")
console.log(curryItem.at(1))
//1

console.log("CASE for curryItem = [0, 1, 'Hola', 'mundo'] curryItem.at(2) results is 'Hola'")
console.log(curryItem.at(2))
//'Hola'

console.log("CASE for curryItem = [0, 1, 'Hola', 'mundo'] curryItem.at(-1) results is 'mundo'")
console.log(curryItem.at(-1))
//'mundo'

console.log('-----------------------------------------')