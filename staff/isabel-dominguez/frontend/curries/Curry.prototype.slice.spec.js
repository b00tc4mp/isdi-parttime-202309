console.log('TEST Curry slice')
console.log("****************************************************************************************************************************************")

console.log('CASE for the Curry(10, 20, 30) extract on a new array from Curry[1] to Curry[4], last not included')

var cSlice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSlice.slice(1, 4)
console.log(result)
// Expected output: Curry {0: 20, 1: 30, 2: 40, length: 3}


console.log('CASE for the Curry(10, 20, 30) extract on a new array from Curry[4], last not included')

var cSlice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSlice.slice(4)
console.log(result)
// Expected output: Curry {0: 50, 1: 60, length: 2}


console.log('CASE for the Curry(10, 20, 30) extract on a new array from Curry[""] to Curry[4], last not included')

var cSlice = new Curry(10, 20, 30, 40, 50, 60)

var result = cSlice.slice("", 4)
console.log(result)
// Expected output: Curry {0: 10, 1: 20, 2: 30, 3: 40, length: 4}