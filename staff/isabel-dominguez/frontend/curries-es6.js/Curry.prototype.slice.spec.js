TEST(' Curry slice')
console.log("****************************************************************************************************************************************")

CASE('for the Curry(10, 20, 30) extract on a new array from Curry[1] to Curry[4], last not included')

let cSlice1 = new Curry(10, 20, 30, 40, 50, 60)

let resultSlice1 = cSlice1.slice(1, 4)
console.log(resultSlice1)
// Expected output: Curry {0: 20, 1: 30, 2: 40, length: 3}


CASE('for the Curry(10, 20, 30) extract on a new array from Curry[4], last not included')

let cSlice2 = new Curry(10, 20, 30, 40, 50, 60)

let resultSlice2 = cSlice2.slice(4)
console.log(resultSlice2)
// Expected output: Curry {0: 50, 1: 60, length: 2}


CASE('for the Curry(10, 20, 30) extract on a new array from Curry[""] to Curry[4], last not included')

let cSlice3 = new Curry(10, 20, 30, 40, 50, 60)

let resultSlice3 = cSlice3.slice("", 4)
console.log(resultSlice3)
// Expected output: Curry {0: 10, 1: 20, 2: 30, 3: 40, length: 4}