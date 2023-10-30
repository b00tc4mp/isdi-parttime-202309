TEST('Curry splice')

CASE('replace one element')

var months = new Curry('Jan', 'Feb', 'March', 'April', 'June')

var removed = months.splice(4, 1, 'May')

console.log(months)
//Curry { 0: 'June', length : 1}

console.log(removed)
// Curry {0: 'June', length: 1 }

CASE('insert one element')

var months = new Curry('Jan', 'March', 'April')

var removed = months.splice(1, 0, 'Feb')

console.log(months)
// curry { 0: 'Jan', 1:'Feb', 2: 'March', 3: 'April', length: 4 }

console.log(removed)
//Curry { length: 0}

CASE('remove 0 (zero) elements before index 2, and inserst "drum" and "guitar"')

var fish = new Curry('angel', 'clown', 'mandarin', 'sturgeon')

var removed = fish.splice(2, 0, 'drum', 'guitar')

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'guitar', 4: 'mandarin', 5: 'sturgeon', length: 6 }

console.log(removed)
// Curry { length: 0}

CASE('remove 1 element at index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon')

var removed = fish.splice(3, 1)

console.log(fish)
// Curry { 0: 'angel', 1: 'clown', 2: 'drum', 3: 'strugeon', length: 4 }

console.log(removed)
// Curry { 0: 'mandarin', length: 1}

CASE('remove 2 elements from index 3'

)