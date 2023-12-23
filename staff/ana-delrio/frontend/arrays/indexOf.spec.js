
console.log('TEST IndexOf arrays')

var arrayvegan = ['tomato', 'carrot', 'pumpkin', 'bean', 'onion']

console.log('CASE for arrayvegan indexOf "carrot" should return 1')
console.log(indexOf(arrayvegan, 'carrot'))
//1

console.log('CASE for arrayvegan indexOf "onion" should return 4')
console.log(indexOf(arrayvegan, 'onion'))
//4

console.log('CASE for arrayvegan indexOf "pumpkin" should return 2')
console.log(indexOf(arrayvegan, 'pumpkin'))
//2

console.log('CASE for arrayvegan indexOf "bean" should return 3')
console.log(indexOf(arrayvegan, 'bean'))
//3

console.log('CASE for arrayvegan indexOf "tomato" should return 0')
console.log(indexOf(arrayvegan, 'tomato'))
//0

console.log('CASE for arrayvegan indexOf "artichoke" should return -1')
console.log(indexOf(arrayvegan, 'artichoke'))
//-1

