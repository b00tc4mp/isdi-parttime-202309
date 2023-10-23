TEST(' Curry find')
console.log("****************************************************************************************************************************************")

CASE('find in "c = new Curry(10, 20, 30)"  for the first element > 11 ')

let cFind = new Curry(10, 20, 30)

function numberGreater11(element) {
    return element > 11
}

let result = cFind.find(numberGreater11)

console.log(result)
// Curry {0: 20, length: 1}


CASE('find in "c = new Curry(10, 20, 30)"  for the first element < 21 ')

let cFind = new Curry(10, 20, 30)

function numberLess21(element) {
    return element < 21
}

let result = cFind.find(numberLess21)

console.log(result)
// Curry {0: 10, length: 1}