console.log('TEST INCLUDES')

console.log('CASE for string "hola mundo" includes "m" should result is true')
console.log(includes('hola mundo', 'm'))
// true

console.log('CASE for string "hola mundo" includes "w" should result is false')
console.log(includes('hola mundo', 'w'))
// false

console.log('CASE for string "hola mundo" includes "h" should result is true')
console.log(includes('hola mundo', 'h'))
// true

console.log('CASE for string "hola mundo" includes "o" should result is true')
console.log(includes('hola mundo', 'o'))
// true

console.log('CASE for string "Hola mundo" includes "H" should result is true')
console.log(includes('Hola mundo', 'H'))
// true