var array = ['hola', 'mundo']

console.log('TEST at')

console.log('CASE for arrays "hola mundo" at -1 should result in "mundo"')
console.log(at(array, -1))
// "mundo"

console.log('CASE for arrays "hola mundo" at 0 should result in "hola"')
console.log('>', at(array, 0), '<')
// "hola"

console.log('CASE for arrays "hola mundo" at -3 should result in "undefined"')
console.log('>', at(array, -3), '<')
// "undefined"