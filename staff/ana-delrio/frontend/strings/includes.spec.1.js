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

console.log('CASE for string "hola mundo" includes "o" results in false')
console.log(includes('hola mundo', 'H'))
//false

console.log('CASE for string "hola mundo" includes "mu" results in false')
console.log(includes('hola mundo', 'mu'))
//false
//se me rompe :(

