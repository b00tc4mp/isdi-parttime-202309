console.log('TEST Curry find')
console.log("****************************************************************************************************************************************")

console.log('CASE find in "c = new Curry(10, 20, 30)"  for the first element > 11 ')

var cFind = new Curry(10, 20, 30)

function numberGreater11(element) {
    return element > 11
}

var result = cFind.find(numberGreater11)

console.log(result)
// Curry {0: 20, length: 1}


console.log('CASE find in "c = new Curry(10, 20, 30)"  for the first element < 21 ')

var cFind = new Curry(10, 20, 30)

function numberLess21(element) {
    return element < 21
}

var result = cFind.find(numberLess21)

console.log(result)
// Curry {0: 10, length: 1}