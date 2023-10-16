
console.log('CASE Curries - Method Find')

console.log('CASE find element in curry [1, 4, 9, 16] to new curry with the first elements wich are higher than 5')

var curry = new Curry(1, 4, 9, 16)

var result = curry.find(function(k) { 
    return k > 10 
})

console.log(result)
// Expected output: 9


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')