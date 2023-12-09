console.log('TEST at')

var array = [2,9,8]

console.log('CASE for array [2,9,8] at index 0, results in 2')
console.log(at(array, 0))
console.log(array.at(0))
//2


console.log('CASE for array [2,9,8] at index 1, results in 9')
console.log(at(array, 1))
console.log(array.at(1))
//9


console.log('CASE for array [2,9,8] at , index -1, results in 8')
console.log(at(array, -1))
console.log(array.at(-1))
//8


console.log('CASE for array [2,9,8] at index -3, results in 2')
console.log(at(array, -3))
console.log(array.at(-3))
//2


console.log('CASE for array [2,9,8] at index 8, results in undefined')
console.log(at(array, 8))
console.log(array.at(8))
//undefined
