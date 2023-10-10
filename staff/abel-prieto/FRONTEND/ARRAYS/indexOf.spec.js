var array = ['dog', 'cat', 'mouse', 'wolf', 'lion']

console.log('TEST ARRAYS - Method indexOf')

console.log('CASE for array indexOf "mouse" should result "2"')
console.log(indexOf(array, 'mouse'))
// 2

console.log('CASE for array indexOf "wolf" should result "3"')
console.log(indexOf(array, 'wolf'))
// 3

console.log('CASE for array indexOf "tiger" should result "-1"')
console.log(indexOf(array, 'tiger'))
// -1

console.log('CASE for array indexOf "lion" should result "4"')
console.log(indexOf(array, 'lion'))
// 4

console.log('CASE for array indexOf "dog" should result "0"')
console.log(indexOf(array, 'dog'))
// 0

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')