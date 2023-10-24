
TEST('TEST Curries - Method Map')

CASE('CASE map curry [1, 4, 9, 16] to new curry with elements multiplied by two')

var curry = new Curry(1, 4, 9, 16)

var result = curry.map(function(x) { 
    return x * 2
});

console.log(result)
// Expected output: curry [2, 8, 18, 32]

CASE('CASE map curry [1, 4, 9, 16] to new curry with elements multiplied by five')

var curry = new Curry(1, 4, 9, 16)

var result2 = curry.map(function(y) {
    return y * 5
})

console.log(result2)
// Expected output: curry [5, 20, 45, 80]

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')