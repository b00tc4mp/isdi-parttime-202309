console.log('TEST Curry at ')

var c = new Curry("potato", "tomato", "chillies", "green-pepper")

console.log('CASE Curry at  0 results in potato')

var element = c.at(0)
console.log(element)
//potato

console.log('CASE Curry at  3 results in green-pepper')

var element = c.at(3)
console.log(element)
// green-pepper

console.log('CASE Curry at  -2 results in chillies')
var element = c.at(-2)
console.log(element)
// chillies


console.log('CASE Curry at 14 results in undefined')
var element = c.at(14)
console.log(element)
// undefined
