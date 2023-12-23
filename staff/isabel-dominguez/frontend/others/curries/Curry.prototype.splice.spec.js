console.log('TEST Curry splice')
console.log("****************************************************************************************************************************************")

console.log('CASE replace one element')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(4, 1, '41')
console.log(cSplice)
// Expected output:


console.log('CASE insert one element')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(1, 0, "11")
console.log(cSplice)
// Expected output:


console.log('CASE remove 0 (zero) elements before index 2, and insert "31" and "32"')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(2, 0, "31", "32")
console.log(cSplice)
// Expected output: 


console.log('CASE remove 1 element at index 3')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(3, 1)
console.log(cSplice)
// Expected output: 


console.log('CASE remove 2 elements from index 3')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(3, 2)
console.log(cSplice)
// Expected output:


console.log('CASE remove all elements from index 0')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(0, 6)
console.log(cSplice)
// Expected output:




console.log('TEST Curry splice')

console.log('CASE replace one element')

var months = new Curry('Jan', 'Feb', 'March', 'April', 'June')

var removed = months.splice(4, 1, 'May')

console.log(months)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', 4: 'May', length: 5 }

console.log(removed)
// Curry { 0: 'June', length: 1 }


console.log('CASE insert one element')

var months = new Curry('Jan', 'March', 'April')

var removed = months.splice(1, 0, 'Feb')

console.log(months)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', length: 4 }

console.log(removed)
// Curry { length: 0 }


console.log('CASE remove 0 (zero) elements before index 2, and insert "drum" and "guitar"')

var fish = new Curry('angel', 'clown', 'mandarin', 'sturgeon')

var removed = fish.splice(2, 0, 'drum', 'guitar')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'guitar', 4: 'mandarin', 5: 'sturgeon', length: 6 }

console.log(removed)
// Curry { length: 0 }


console.log('CASE remove 1 element at index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon')

var removed = fish.splice(3, 1)

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sturgeon', length: 4 }

console.log(removed)
// Curry { 0: 'mandarin', length: 1 }


console.log('CASE remove 2 elements from index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

var removed = fish.splice(3, 2)

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sword', length: 4 }

console.log(removed)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }


console.log('FIX CASE replace 2 elements from index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

var removed = fish.splice(3, 2, 'pepito', 'grillo')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'grillo', 5: 'sword', length: 6 }

console.log(removed)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }


console.log('CASE replace 1 elements from index -3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

var removed = fish.splice(-3, 1, 'pepito')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'sword', length: 5 }

console.log(removed)
// Curry { 0: 'mandarin', length: 1 }

