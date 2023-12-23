console.log('TEST includes')


console.log('CASE for string "hola mundo" includes "m" results in true')
console.log(includes('hola mundo', 'm'))
//true

console.log('CASE for string "hola mundo" includes "w" results in false')
console.log(includes('hola mundo', 'w'))
//false

console.log('CASE for string "hola mundo" includes "h" results in true')
console.log(includes('hola mundo', 'h'))
//true

console.log('CASE for string "hola mundo" includes "o" results in true')
console.log(includes('hola mundo', 'o'))
//true

console.log('CASE for string "hola mundo" includes "o" results is false')
console.log(includes('hola mundo', 'H'))
//false

console.log('CASE for string "hola mundo" includes "mu" results is false')
console.log(includes('hola mundo', 'mu'))
//false
//se me rompe :(

console.log('CASE for string "hola mundo" includes "mo" results in false')
console.log(includes('hola mundo', 'mo'))
//false

console.log('CASE for string "hola mundo" includes "la" results in true')
console.log(includes('hola mundo', 'la'))
//true

console.log('CASE for string "hola mundo" includes "las" results in false')
console.log(includes('hola mundo', 'las'))
//false
//ya no funciona :(