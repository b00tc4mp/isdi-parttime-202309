console.log('TEST at arrays')

var numbers = [1, 2, 3, 4, 5]

console.log('CASE for numbers array at 0 should return 1')
console.log(at(numbers, 0))
// 1

console.log('CASE for numbers array includes index -1 should return 5')
console.log(at(numbers, -1))
// 5

console.log('CASE for numbers array  includes index 3 should return 4')
console.log(at(numbers, 3))
// 4

console.log('CASE for numbers array includes index -3 should return 3')
console.log(at(numbers, -3))
// 3


