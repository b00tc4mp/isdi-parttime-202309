console.log('TEST Curry splice')

console.log('CASE replace one element')

var months = new Curry('Jan', 'Feb', 'March', 'April', 'June')

var removed = months.splice(4, 1, 'May')

console.log(months)
// Curry {'Jan', 'Feb', 'March', 'April', 'May', length : 5}

console.log(removed)
// Curry { 0: 'June', length : 1}

console.log('CASE insert one element')

var months = new Curry('Jan', 'March', 'April')

var removed = months.splice(1, 0, 'Feb')

console.log(months)
// Curry {'Jan', 'Feb', 'March', 'April'}

console.log(removed)
// Curry { length : 0}

console.log('CASE remove 0 (zero) elements before index 2, and insert "drum" and "guitar"')

var fish = new Curry('angel', 'clown', 'mandarin', 'sturgeon')

var removed = fish.splice(2, 0, 'drum', 'guitar')

console.log(fish)
// Curry {'angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon', length :6}

console.log(removed)
// Curry { length : 0}

console.log('CASE remove 1 element at index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon')

var removed = fish.splice(3, 1)

console.log(fish)
// Curry {'angel', 'clown', 'drum', 'sturgeon', length: 4}

console.log(removed)
// ['mandarin']

console.log('CASE remove 2 elements from index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

var removed = fish.splice(3, 2)

console.log(fish)
// Curry {'angel', 'clown', 'drum', 'sword', length: 4}

console.log(removed)
// Curry {'mandarin', 'sturgeon', length : 2}

// TO DO

/* console.log('CASE replace 2 elements from index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')

var removed = fish.splice(3, 2, 'pepito', 'grillo')

console.log(fish)
// Curry {'0: angel', 1: 'clown', 1: 'drum', 3: 'pepito', 4: 'grillo', 5: 'sword', length: 4}

console.log(removed)
// Curry {'0: mandarin', 1: 'sturgeon', 2: length : 2} */