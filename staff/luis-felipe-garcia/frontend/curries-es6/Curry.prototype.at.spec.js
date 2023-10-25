TEST(' Curry at')

TEST(' at - curryItem')
let curryItem = new Curry(0, 1, 'Hola', 'mundo')

CASE(" for curryItem = [0, 1, 'Hola', 'mundo'] curryItem.at(1) results is 1")
console.log(curryItem.at(1))
//1

CASE(" for curryItem = [0, 1, 'Hola', 'mundo'] curryItem.at(2) results is 'Hola'")
console.log(curryItem.at(2))
//'Hola'

CASE(" for curryItem = [0, 1, 'Hola', 'mundo'] curryItem.at(-1) results is 'mundo'")
console.log(curryItem.at(-1))
//'mundo'

console.log('-----------------------------------------')