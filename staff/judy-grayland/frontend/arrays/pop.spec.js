console.log('TEST pop')
var planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
]
var pizzas = []

//pop() = The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

console.log('CASE for pop planets array should return the string "neptune"')
console.log(pop(planets))
// neptune

console.log('CASE for pop pizzas array should return the string "undefined"')
console.log(pop(pizzas))
// undefined

console.log()

console.log('------------------------------------------')
