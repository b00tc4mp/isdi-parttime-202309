
console.log('TEST Curries - Method Slice')

console.log('CASE for the curry, extract on a new curry from curry[1] to curry[5], last not included')

var curry = new Curry(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
var result = curry.slice(1, 5)

console.log(result)
// Expected output: [20, 30, 40, 50]

console.log('CASE for the curry, extract on a new curry from curry[4] to curry[9], last not included')

var curry2 = new Curry(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
var result2 = curry2.slice(4, 9)

console.log(result2)
// Expected output: [50, 60, 70, 80, 90]
console.log('- - - - - - - - - - - - - - - - - - - - - - - -')