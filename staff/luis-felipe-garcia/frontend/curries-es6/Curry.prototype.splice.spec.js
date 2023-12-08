TEST(' Curry splice')

CASE(' replace June for May in this curry (Jan, Feb, March, April, June)')
let months = new Curry('Jan', 'Feb', 'March', 'April', 'June')
let removed = months.splice(4, 1, 'May')

console.log('New Curry:', months)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', 4: 'May', length: 5 }
console.log('Element/s removed:', removed)
// Curry { 0: 'June', length: 1 }

CASE(' insert Feb between Jan and March in this curry (Jan, March, April)')
months = new Curry('Jan', 'March', 'April')
removed = months.splice(1, 0, 'Feb')

console.log('New Curry:', months)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', length: 4 }
console.log('Element/s removed:', removed)
// Curry { length: 0 }

CASE(' remove 0 (zero) elements before index 2, and insert "drum" and "guitar" in this curry (angel, clown, mandarin, sturgeon)')
let fish = new Curry('angel', 'clown', 'mandarin', 'sturgeon')
removed = fish.splice(2, 0, 'drum', 'guitar')

console.log('New Curry:', fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'guitar', 4: 'mandarin', 5: 'sturgeon', length: 6 }
console.log('Element/s removed:', removed)
// Curry { length: 0 }

CASE(' remove 1 element at index 3 in this Curry(angel, clown, drum, mandarin, sturgeon)')
fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon')
removed = fish.splice(3, 1)

console.log('New Curry:', fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sturgeon', length: 4 }
console.log('Element/s removed:', removed)
// Curry { 0: 'mandarin', length: 1 }

CASE(' remove 2 elements from index 3 in this Curry(angel, clown, drum, mandarin, sturgeon, sword)')
fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')
removed = fish.splice(3, 2)

console.log('New Curry:', fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sword', length: 4 }
console.log('Element/s removed:', removed)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }

CASE(' replace 2 elements from index 3 in this Curry (angel, clown, drum, mandarin, sturgeon, sword)')
fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')
removed = fish.splice(3, 2, 'peptito', 'grillo')

console.log('New Curry:', fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'grillo', 5: 'sword', length: 6 }
console.log('Element/s removed:', removed)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }