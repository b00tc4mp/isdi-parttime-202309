var array = ['Dog', 'Cat', 'Mouse', 'Wolf', 'Lion']

console.log('TEST ARRAYS - Method join')

console.log('CASE for array join with none between')
var result = join(array, '')
console.log(result)
// DogCatMouseWolfLion

console.log('CASE for array join with "," between')
var result = join(array, ",")
console.log(result)
// Dog,Cat,Mouse,Wolf,Lion

console.log('CASE for array join with "-" between')
var result = join(array, "-")
console.log(result)
// Dog-Cat-Mouse-Wolf-Lion


console.log('- - - - - - - - - - - - - - - - - - - - - - - -')