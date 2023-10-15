console.log('TEST find')

console.log('CASE for find array [1, 4, 9, 16] to first element larger than 5')

var arrayToSearchIn = [1, 4, 9, 16]

var foundValue = find(arrayToSearchIn, isGreaterThan5)

function isGreaterThan5(x) {
  return x > 5
}

console.log(foundValue)
// Expected output: 9

console.log('CASE for find array [1, 4, 9, 16] to first element larger than 50')

var arrayToSearchIn = [1, 4, 9, 16]

var foundValue = find(arrayToSearchIn, isGreaterThan50)

function isGreaterThan50(x) {
  return x > 50
}

console.log(foundValue)
// Expected output: undefined
