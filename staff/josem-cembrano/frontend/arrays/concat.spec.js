var array1 = ['English:', 'hola', 'mundo', false, '=>']
var array2 = ['English:', 'hello', 'world', true, '=>']
var array3 = ['Español', 'hola', 'mundo', true]
console.log('CASE for arrays "hola mundo" concat (array1, array2, array3) should result in new array : [English: hola mundo, false => English: hello world, true => Español hola mundo true')
console.log(concat(array1, array2, array3))
// [[English: hola mundo, false => English: hello world, true => Español hola mundo true]
