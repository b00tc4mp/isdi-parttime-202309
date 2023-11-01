TEST(' Curry splice')
console.log("****************************************************************************************************************************************")

CASE('replace one element')

let cSplice1 = new Curry(10, 20, 30, 40, 50, 60)

let resultSplice1 = cSplice1.splice(4, 1, '41')
console.log(resultSplice1)
// Expected output:


CASE('insert one element')

let cSplice2 = new Curry(10, 20, 30, 40, 50, 60)

let resultSplice2 = cSplice2.splice(1, 0, "11")
console.log(resultSplice2)
// Expected output:


CASE('remove 0 (zero) elements before index 2, and insert "31" and "32"')

let cSplice3 = new Curry(10, 20, 30, 40, 50, 60)

let resultSplice3 = cSplice3.splice(2, 0, "31", "32")
console.log(resultSplice3)
// Expected output: 


CASE('remove 1 element at index 3')

let cSplice4 = new Curry(10, 20, 30, 40, 50, 60)

let resultSplice4 = cSplice4.splice(3, 1)
console.log(resultSplice4)
// Expected output: 


CASE('remove 2 elements from index 3')

let cSplice5 = new Curry(10, 20, 30, 40, 50, 60)

let resultSplice5 = cSplice5.splice(3, 2)
console.log(resultSplice5)
// Expected output:


CASE('remove all elements from index 0')

let cSplice6 = new Curry(10, 20, 30, 40, 50, 60)

let resultSplice6 = cSplice6.splice(0, 6)
console.log(resultSplice6)
// Expected output:




TEST(' Curry splice')

CASE('replace one element')

let months1 = new Curry('Jan', 'Feb', 'March', 'April', 'June')

let removed1 = months1.splice(4, 1, 'May')

console.log(months1)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', 4: 'May', length: 5 }

console.log(removed1)
// Curry { 0: 'June', length: 1 }


CASE('insert one element')

let months2 = new Curry('Jan', 'March', 'April')

let removed2 = months2.splice(1, 0, 'Feb')

console.log(months2)
// Curry { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', length: 4 }

console.log(removed2)
// Curry { length: 0 }


CASE('remove 0 (zero) elements before index 2, and insert "drum" and "guitar"')

let fish3 = new Curry('angel', 'clown', 'mandarin', 'sturgeon')

let removed3 = fish3.splice(2, 0, 'drum', 'guitar')

console.log(fish3)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'guitar', 4: 'mandarin', 5: 'sturgeon', length: 6 }

console.log(removed3)
// Curry { length: 0 }


CASE('remove 1 element at index 3')

let fish4 = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon')

let removed4 = fish4.splice(3, 1)

console.log(fish4)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sturgeon', length: 4 }

console.log(removed4)
// Curry { 0: 'mandarin', length: 1 }


CASE('remove 2 elements from index 3')

let fish5 = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

let removed5 = fish5.splice(3, 2)

console.log(fish5)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'sword', length: 4 }

console.log(removed5)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }


console.log('FIX CASE replace 2 elements from index 3')

let fish6 = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

let removed6 = fish6.splice(3, 2, 'pepito', 'grillo')

console.log(fish6)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'grillo', 5: 'sword', length: 6 }

console.log(removed6)
// Curry { 0: 'mandarin', 1: 'sturgeon', length: 2 }


CASE('replace 1 elements from index -3')

let fish7 = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

let removed7 = fish7.splice(-3, 1, 'pepito')

console.log(fish7)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'pepito', 4: 'sword', length: 5 }

console.log(removed7)
// Curry { 0: 'mandarin', length: 1 }

