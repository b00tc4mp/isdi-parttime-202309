var array = ['Dog', 'Cat', 'Mouse']

console.log('TEST ARRAYS - Method PUSH')

console.log('CASE for PUSH the initial array ["Dog", "Cat", "Mouse"], add the objet "Lion" on last position')
array = push(array, "Lion")
console.log(array)
// [Dog, Cat, Mouse, Lion]

console.log('CASE for PUSH the initial array ["Dog", "Cat", "Mouse"], add the objet "Elephant" on last position')
array = push(array, "Elephant")
console.log(array)
// [Dog, Cat, Mouse, Lion, Elephant]

console.log('CASE for PUSH the initial array ["Dog", "Cat", "Mouse"], add the objet "Snake" on last position')
array = push(array, "Snake")
console.log(array)
// [Dog, Cat, Mouse, Lion, Elephant, Snake]

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')