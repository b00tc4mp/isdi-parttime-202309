TEST(' Curry pop')
console.log("items = [0, 1, 'Hola', 'mundo']")




CASE(" for items.pop() results is 'mundo' and items = [0, 1, 'Hola']")
let items = new Curry(0, 1, 'Hola', 'mundo')
console.log(items.pop())
console.log(items)
//[0, 1, 'Hola']

CASE(" for items2.pop() results is  'Hola' and items = [0, 1]")
let items2 = new Curry(0, 1, 'Hola')
console.log(items2.pop())
console.log(items2)
//[0, 1]

CASE(" for new Curry().pop() results is undefined")
let items3 = new Curry()
console.log(items3.pop())
console.log(items3)
//undefined

console.log('-----------------------------------------')