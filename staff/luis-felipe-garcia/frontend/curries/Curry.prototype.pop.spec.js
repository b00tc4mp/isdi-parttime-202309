console.log('TEST Curry pop')
console.log("items = [0, 1, 'Hola', 'mundo']")




console.log("CASE for items.pop() results is 'mundo' and items = [0, 1, 'Hola']")
var items = new Curry(0, 1, 'Hola', 'mundo')
console.log(items.pop())
console.log(items)
//[0, 1, 'Hola']

console.log("CASE for items2.pop() results is  'Hola' and items = [0, 1]")
var items2 = new Curry(0, 1, 'Hola')
console.log(items2.pop())
console.log(items2)
//[0, 1]

console.log("CASE for new Curry().pop() results is undefined")
var items3 = new Curry()
console.log(items3.pop())
console.log(items3)
//undefined

console.log('-----------------------------------------')