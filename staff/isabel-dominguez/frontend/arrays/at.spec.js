console.log('TEST at')

const array1 = [5, 12, 8, 130, 44];

console.log('CASE for array [5, 12, 8, 130, 44] includes index "0" results in "5"')
console.log(at(array1, 0))
// 5

console.log('CASE for array [5, 12, 8, 130, 44] includes index "-5" results in "5"')
console.log(at(array1, -5))
// 5

console.log('CASE for array [5, 12, 8, 130, 44] includes index "-1" results in "44"')
console.log(at(array1, -1))
// 44

console.log('CASE for array [5, 12, 8, 130, 44] includes index "3" results in "130"')
console.log(at(array1, 3))
// 130

console.log('CASE for array [5, 12, 8, 130, 44] includes index "-3" results in "8"')
console.log(at(array1, -3))
// 8

