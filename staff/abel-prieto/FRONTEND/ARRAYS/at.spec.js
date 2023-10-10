console.log('TEST ARRAYS - Method AT')

var array = ['dog', 'cat', 'mouse', 'wolf', 'lion']

console.log('CASE for array AT index "2" should result "mouse"')
console.log(at(array, 2))
// 'mouse'

console.log('CASE for array AT "3" should result "wolf"')
console.log(at(array, 3))
// 'wolf'

console.log('CASE for array AT "5" should result "undefined"')
console.log(at(array, 5))
// undefined

console.log('CASE for array AT "4" should result "lion"')
console.log(at(array, 4))
// 'lion'

console.log('CASE for array AT "-2" should result "wolf"')
console.log(at(array, -2))
// 'wolf'

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')