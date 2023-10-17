
console.log('TEST Curries - Method Splice')

console.log('CASE replace one element')

var months = new Curry('Jan', 'Feb', 'March', 'Abril', 'June')
var removedItems = curry.splice(4, 1, 'May')

console.log(months)
// Curry {0: 'Jan', 1: 'Feb', 2: 'March', 3: 'Abril', 4: 'May', lenght: 5}

console.log(removedItems)
// Curry {0: 'June', lenght: 1}


console.log('CASE insert one element')

var months2 = new Curry('Jan', 'March', 'Abril')
var insertItems = splice(months, 1, 0, 'Feb')

console.log(months2)
// Curry {0: 'Jan', 1: 'Feb', 2: 'March', 3: 'Abril', length: 4}

console.log(insertItems)
// Curry {0: 'Feb', length: 1}


console.log('CASE remove 2 elements from index 3')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword');
var removedItems2 = fish.splice(3, 2);

console.log(fish)
// Curry {0: 'angel', 1: 'clown', 2: 'drum', 3: 'sturgeon', lenght: 4}

console.log(removedItems2)
// Curry {0: 'mandarin', length: 1}

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')