console.log('TEST Curries - Method AT')

var curry = new Curry('dog', 'cat', 'mouse', 'wolf', 'lion')

console.log('CASE for curry AT "2" should result "mouse"')

var element = curry.at(2)
console.log(element)
// 'mouse'

console.log('CASE for curry AT "3" should result "wolf"')
var element = curry.at(3)
console.log(element)
// 'wolf'

console.log('CASE for curry AT "5" should result "undefined"')
var element = curry.at(5)
console.log(element)
// undefined

console.log('CASE for curry AT "4" should result "lion"')
var element = curry.at(4)
console.log(element)
// 'lion'

console.log('CASE for curry AT "-2" should result "wolf"')
var element = curry.at(-2)
console.log(element)
// 'wolf'

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')