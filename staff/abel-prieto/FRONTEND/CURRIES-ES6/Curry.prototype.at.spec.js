
TEST('Curries - Method AT')

CASE('For curry AT "2" should result "mouse"')

var curry = new Curry('dog', 'cat', 'mouse', 'wolf', 'lion')

var element = curry.at(2)
console.log(element)
// 'mouse'

CASE('For curry AT "3" should result "wolf"')

var curry = new Curry('dog', 'cat', 'mouse', 'wolf', 'lion')

var element = curry.at(3)
console.log(element)
// 'wolf'

CASE('For curry AT "5" should result "undefined"')

var curry = new Curry('dog', 'cat', 'mouse', 'wolf', 'lion')

var element = curry.at(5)
console.log(element)
// undefined

CASE('For curry AT "4" should result "lion"')

var curry = new Curry('dog', 'cat', 'mouse', 'wolf', 'lion')

var element = curry.at(4)
console.log(element)
// 'lion'

CASE('For curry AT "-2" should result "wolf"')

var curry = new Curry('dog', 'cat', 'mouse', 'wolf', 'lion')

var element = curry.at(-2)
console.log(element)
// 'wolf'

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')