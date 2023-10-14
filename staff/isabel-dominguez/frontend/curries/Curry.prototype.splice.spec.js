console.log('TEST Curry splice')
console.log("****************************************************************************************************************************************")

console.log('CASE replace one element')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(4, 1, 41)
console.log(result)
// Expected output:


console.log('CASE insert one element')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(1, 0, 11)
console.log(result)
// Expected output:


console.log('CASE remove 0 (zero) elements before index 2, and insert "31" and "32"')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(2, 0, 31, 32)
console.log(result)
// Expected output: 


console.log('CASE remove 1 element at index 3')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(3, 1)
console.log(result)
// Expected output: 


console.log('CASE remove 2 elements from index 3')

var cSplice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSplice.splice(3, 2)
console.log(result)
// Expected output:
