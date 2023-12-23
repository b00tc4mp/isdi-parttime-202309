TEST(' Curry find')
console.log("****************************************************************************************************************************************")

CASE('find in "c = new Curry(10, 20, 30)"  for the first element > 11 ')

let cFind1 = new Curry(10, 20, 30)

function numberGreater11(element) {
    return element > 11
}

let result11 = cFind1.find(numberGreater11)

console.log(result11)
// Curry {0: 20, length: 1}


CASE('find in "c = new Curry(10, 20, 30)"  for the first element < 21 ')

let cFind2 = new Curry(10, 20, 30)

function numberLess21(element) {
    return element < 21
}

let result22 = cFind2.find(numberLess21)

console.log(result22)
// Curry {0: 10, length: 1}