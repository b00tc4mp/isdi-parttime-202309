console.log('-------------------------------------------')

console.log('TEST pop arrays')

var arrayvegan = ['tomato', 'carrot', 'pumpkin']

console.log('CASE for arrayvegan should return "tomato", "carrot"')
console.log(arrayvegan.pop())
console.log(arrayvegan)
// ["tomato", "carrot"]

console.log('CASE for arrayvegan should return "tomato"')
console.log(arrayvegan.pop())
console.log(arrayvegan)
// ["tomato"]

console.log('CASE for arrayvegan should return []')
console.log(arrayvegan.pop())
console.log(arrayvegan)
// []

console.log('CASE for arrayvegan should return "undefined"')
console.log(arrayvegan.pop())
console.log(arrayvegan)
// 'undefined'


console.log('-------------------------------------------')