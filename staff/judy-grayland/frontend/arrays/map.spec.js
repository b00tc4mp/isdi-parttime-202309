console.log('TEST map')

console.log(
  'CASE for map array [1, 4, 9, 16] to new array with elements multiplied by 2'
)

var array1 = [1, 4, 9, 16]

var mappedArray = map(array1, function (x) {
  return x * 2
})

console.log(mappedArray)
// Expected output: [2, 8, 18, 32]
