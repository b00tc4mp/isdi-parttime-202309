
TEST('TEST Curries - Method indexOf')

CASE('CASE for curry indexOf "mouse" should result "2"')

var curry = ['dog', 'cat', 'mouse', 'wolf', 'lion']

var result = curry.indexOf('mouse')
console.log(result)
// 2

CASE('CASE for curry indexOf "wolf" should result "3"')

var curry = ['dog', 'cat', 'mouse', 'wolf', 'lion']

var result = curry.indexOf('wolf')
console.log(result)
// 3

CASE('CASE for curry indexOf "tiger" should result "-1"')

var curry = ['dog', 'cat', 'mouse', 'wolf', 'lion']

var result = curry.indexOf('tiger')
console.log(result)
// -1

CASE('CASE for curry indexOf "lion" should result "4"')

var curry = ['dog', 'cat', 'mouse', 'wolf', 'lion']

var result = curry.indexOf('lion')
console.log(result)
// 4

CASE('CASE for curry indexOf "dog" should result "0"')

var curry = ['dog', 'cat', 'mouse', 'wolf', 'lion']

var result = curry.indexOf('dog')
console.log(result)
// 0

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')