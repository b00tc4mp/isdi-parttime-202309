
TEST('Curries - Method Splice')

CASE('Replace one element')

var months = new Curry('Jan', 'Feb', 'March', 'Abril', 'June')
var replace = months.splice(4, 1, 'May')

console.log(months)
// Curry {0: 'Jan', 1: 'Feb', 2: 'March', 3: 'Abril', 4: 'May', lenght: 5}

console.log(replace)
// Curry {0: 'June', lenght: 1}


CASE('Insert one element')

var months = new Curry('Jan', 'March', 'Abril')
var insert = months.splice(1, 0, 'Feb')

console.log(months)
// Curry {0: 'Jan', 1: 'Feb', 2: 'March', 3: 'Abril', length: 4}

console.log(insert)
// Curry {length: 0}


CASE('Remove 2 elements')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword');
var removed = fish.splice(3, 2);

console.log(fish)
// Curry {0: 'angel', 1: 'clown', 2: 'drum', 3: 'sword', lenght: 4}

console.log(removed)
// Curry {0: 'mandarin', 1: 'sturgeon', length: 2}


CASE('Replace 2 elements')

var fish = new Curry('angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword')
var replace = fish.splice(3, 2, 'pepito', 'grillo');

console.log(fish)
// Curry {0: angel, 1: clown, 2: pepito, 3: grillo, 4: sturgeon, 5: sword, length: 6}

console.log(replace)
// Curry {0: 'mandarin', 1: 'sturgeon', length: 2}

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')