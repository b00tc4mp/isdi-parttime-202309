TEST(' Curry splice')
console.log("****************************************************************************************************************************************")

CASE('replace one element')

let cSplice = new Curry(10, 20, 30, 40, 50, 60)

let result = cSplice.splice(4, 1, '41')
console.log(cSplice)
// Expected output:


CASE('insert one element')

let cSplice = new Curry(10, 20, 30, 40, 50, 60)

let result = cSplice.splice(1, 0, "11")
console.log(cSplice)
// Expected output:


CASE('remove 0 (zero) elements before index 2, and insert "31" and "32"')

let cSplice = new Curry(10, 20, 30, 40, 50, 60)

let result = cSplice.splice(2, 0, "31", "32")
console.log(cSplice)
// Expected output: 


CASE('remove 1 element at index 3')

let cSplice = new Curry(10, 20, 30, 40, 50, 60)

let result = cSplice.splice(3, 1)
console.log(cSplice)
// Expected output: 


CASE('remove 2 elements from index 3')

let cSplice = new Curry(10, 20, 30, 40, 50, 60)

let result = cSplice.splice(3, 2)
console.log(cSplice)
// Expected output:


CASE('remove all elements from index 0')

let cSplice = new Curry(10, 20, 30, 40, 50, 60)

let result = cSplice.splice(0, 6)
console.log(cSplice)
// Expected output:




TEST(' Curry splice')

CASE('replace one element')

let months = new Curry('Jan', 'Feb', 'March', 'April', 'June')

let removed = months.splice(4, 1, 'May')

console.log(months)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', 4: 'May', length: 5 }

console.log(removed)
// Curry { 0: 'June', length: 1 }


CASE('insert one element')

let months = new Curry('Jan', 'March', 'April')

let removed = months.splice(1, 0, 'Feb')

console.log(months)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', length: 4 }

console.log(removed)
// Curry { length: 0 }


CASE('remove 0 (zero) elements before index 2, and insert "drum" and "guitar"')

let fish = new Curry('angel', 'clown', 'mandarin', 'sturgeon')

let removed = fish.splice(2, 0, 'drum', 'guitar')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'guitar', 4: 'mandarin', 5: 'sturgeon', length: 6 }

console.log(removed)
// Curry { length: 0 }


CASE('remove 1 element at index 3')

let fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon')

let removed = fish.splice(3, 1)

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sturgeon', length: 4 }

console.log(removed)
// Curry { 0: 'mandarin', length: 1 }


CASE('remove 2 elements from index 3')

let fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

let removed = fish.splice(3, 2)

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sword', length: 4 }

console.log(removed)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }


console.log('FIX CASE replace 2 elements from index 3')

let fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

let removed = fish.splice(3, 2, 'pepito', 'grillo')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'grillo', 5: 'sword', length: 6 }

console.log(removed)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }


CASE('replace 1 elements from index -3')

let fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

let removed = fish.splice(-3, 1, 'pepito')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'sword', length: 5 }

console.log(removed)
// Curry { 0: 'mandarin', length: 1 }

