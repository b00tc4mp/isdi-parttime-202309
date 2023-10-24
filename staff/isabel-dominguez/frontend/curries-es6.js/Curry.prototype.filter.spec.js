TEST(' Curry filter')
console.log("****************************************************************************************************************************************")

CASE('filter "c = new Curry(10, 20, 30)" to new object with elements > 11 ')

let cFilter = new Curry(10, 20, 30)

function numbersGreater11(element) {
    return element > 11
}

let result = cFilter.filter(numbersGreater11)

console.log(result)
// Curry {0: 20, 1: 30, length: 2}


CASE('filter "c = new Curry(10, 20, 30)" to new object with elements < 11 ')

let cFilter = new Curry(10, 20, 30)

function numbersLessThan11(element) {
    return element < 11
}

let result = cFilter.filter(numbersLessThan11)

console.log(result)
// Curry {0: 10, length: 1}


CASE('filter "c = new Curry(10, 20, 30)" to new object with elements < 9 ')

let cFilter = new Curry(10, 20, 30)

function numbersLessThan9(element) {
    return element < 9
}

let result = cFilter.filter(numbersLessThan9)

console.log(result)
// Curry {length: 0}