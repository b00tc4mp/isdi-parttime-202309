
console.log('TEST Curries - Method join')

console.log('CASE for curry join with none between')

var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join('')
console.log(result)
// DogCatMouseWolfLion

console.log('CASE for curry join with "," between without element')

var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join(',')
console.log(result)
// Dog,Cat,Mouse,Wolf,Lion

console.log('CASE for curry join with "-" between')
var curry = new Curry('Dog', 'Cat', 'Mouse', 'Wolf', 'Lion')

var result = curry.join('-')
console.log(result)
// Dog-Cat-Mouse-Wolf-Lion


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')