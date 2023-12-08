console.log('TEST Curry.concat')
console.log("curryItem1 = [0, 1, 'Hola', 'mundo']")
console.log("curryItem2 = ['this', 'is', 'a', 'test']")
console.log("curryItem3 = ['of', 'coding', 'a', 'Js', 'method']")

var curryItem1 = new Curry(0, 1, 'Hola', 'mundo')
var curryItem2 = new Curry('this', 'is', 'a', 'test')
var curryItem3 = new Curry('of', 'coding', 'a', 'Js', 'method')

console.log("CASE for curryItem1.concat(curryItem2) results is [0, 1, 'Hola', 'mundo', 'this', 'is', 'a', 'test']")
console.log(curryItem1.concat(curryItem2))
//[0, 1, 'Hola', 'mundo', 'this', 'is', 'a', 'test']

console.log("CASE for curryItem1.concat(curryItem2, curryItem3) results is [0, 1, 'Hola', 'mundo', 'this', 'is', 'a', 'test', 'of', 'coding', 'a', 'Js', 'method']")
console.log(curryItem1.concat(curryItem2, curryItem3))
//[0, 1, 'Hola', 'mundo', 'this', 'is', 'a', 'test', 'of', 'coding', 'a', 'Js', 'method']


console.log('-----------------------------------------')