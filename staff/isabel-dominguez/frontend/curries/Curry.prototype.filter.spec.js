console.log('TEST Curry filter')
console.log("****************************************************************************************************************************************")

console.log('CASE filter "c = new Curry(10, 20, 30)" to new array with elements > 11 ')

var cFilter = new Curry(10, 20, 30)

function numbersGreater11(element) {
    return element > 11
}

var result = cFilter.filter(numbersGreater11)

console.log(result)
// Curry {0: 20, 1: 30, length: 2}


console.log('CASE filter "c = new Curry(10, 20, 30)" to new array with elements < 11 ')

var cFilter = new Curry(10, 20, 30)

function numbersLessThan11(element) {
    return element < 11;
}

var result = cFilter.filter(numbersLessThan11)

console.log(result)
// Curry {0: 10, length: 1}