
TEST('Curries - Method join')

CASE('For curry join with none between')

var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join('')
console.log(result)
// DogCatMouseWolfLion

CASE('For curry join with "," between without element')

var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join(',')
console.log(result)
// Dog,Cat,Mouse,Wolf,Lion

CASE('For curry join with "-" between')
var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join('-')
console.log(result)
// Dog-Cat-Mouse-Wolf-Lion


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')