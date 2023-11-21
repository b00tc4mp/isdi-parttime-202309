console.log('CASE Curries - Method Filter')

console.log('CASE filter curry [1, 4, 9, 16] to new curry with elements wich are higher than 5')

var curry = new Curry(1, 4, 9, 16)

var result = curry.filter(function(x) {
    return x > 5
})
console.log(result)
// Expected output: Curry [9,16]


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')