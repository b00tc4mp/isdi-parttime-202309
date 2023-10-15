console.log('TEST filter')
console.log(
  'CASE filter array [1, 4, 9, 16] to new array that are larger than 5'
)

var array1 = [1, 4, 9, 16]

var filteredArray = filter(array1, isGreaterThan5)

function isGreaterThan5(x) {
  return x > 5
}

console.log(filteredArray)
// Expected output: [9, 16]
