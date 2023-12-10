var array = ['Dog', 'Cat', 'Mouse']

console.log('TEST ARRAYS - Method PUSH')

console.log('CASE for PUSH the initial array ["Dog", "Cat", "Mouse"], add the objet "Lion" on last position')
var count = push(array, "Lion")
console.log(count)
console.log(array)
// [Dog, Cat, Mouse, Lion]

console.log('CASE for PUSH the initial array ["Dog", "Cat", "Mouse"], add the objet "Elephant" on last position')
var count2 = push(array, "Elephant")
console.log(count2)
console.log(array)
// [Dog, Cat, Mouse, Lion, Elephant]

console.log('CASE for PUSH the initial array ["Dog", "Cat", "Mouse"], add the objet "Snake" on last position')
var count3 = push(array, "Snake")
console.log(count3)
console.log(array)
// [Dog, Cat, Mouse, Lion, Elephant, Snake]

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')