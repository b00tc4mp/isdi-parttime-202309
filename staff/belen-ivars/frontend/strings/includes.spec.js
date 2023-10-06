console.log('TEST Includes')

console.log('CASE for string "hola mundo" includes "m" results is true')
console.log(includes('hola mundo', 'm'))
// true

console.log('CASE for string "hola mundo" includes "w" results is false')
console.log(includes('hola mundo', 'w'))
// false

console.log('CASE for string "hola mundo" includes "h" results is true')
console.log(includes('hola mundo', 'h'))
// true

console.log('CASE for string "hola mundo" includes "o" results is true')
console.log(includes('hola mundo', 'o'))
// true

console.log('CASE for string "hola mundo" includes "H" results is false')
console.log(includes('hola mundo', 'H'))
// false

console.log('CASE for string "hola mundo" includes "mu" results is true')
console.log(includes('hola mundo', 'mu'))
// true

console.log('CASE for string "hola mundo" includes "mo" results is false')
console.log(includes('hola mundo', 'mo'))
// false

console.log('CASE for string "hola mundo" includes "la" results is true')
console.log(includes('hola mundo', 'la'))
//true

console.log('CASE for string "hola mundo" includes "las" results is false')
console.log(includes('hola mundo', 'las'))
//false

console.log('CASE for string "hola mundo" includes "la " results is true')
console.log(includes('hola mundo', 'la '))
//true

console.log('CASE for string "hola mundo" includes "wo" results is false')
console.log(includes('hola mundo', 'wo'))
//false

console.log('CASE for string "hola mundo" includes "law" results is false')
console.log(includes('hola mundo', 'law'))
//false

console.log('CASE for string "hola mundo" includes "mund" results is true')
console.log(includes('hola mundo', 'mund'))
//true