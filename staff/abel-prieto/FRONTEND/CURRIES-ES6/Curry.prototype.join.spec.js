
TEST('TEST Curries - Method join')

CASE('CASE for curry join with none between')

var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join('')
console.log(result)
// DogCatMouseWolfLion

CASE('CASE for curry join with "," between without element')

var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join(',')
console.log(result)
// Dog,Cat,Mouse,Wolf,Lion

CASE('CASE for curry join with "-" between')
var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join('-')
console.log(result)
// Dog-Cat-Mouse-Wolf-Lion


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')