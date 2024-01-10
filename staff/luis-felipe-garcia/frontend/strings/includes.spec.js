console.log('TEST includes')

console.log('CASE for string "hola mundo, son las 22:47" includes "m" results in true')
console.log(includes('hola mundo, son las 22:47', 'm'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "w" results in false')
console.log(includes('hola mundo, son las 22:47', 'w'))
//false

console.log('CASE for string "hola mundo, son las 22:47" includes "h" results in true')
console.log(includes('hola mundo, son las 22:47', 'h'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "o" results in true')
console.log(includes('hola mundo, son las 22:47', 'o'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "H" results in false')
console.log(includes('hola mundo, son las 22:47', 'H'))
//false

console.log('CASE for string "hola mundo, son las 22:47" includes "mu" results in true')
console.log(includes('hola mundo, son las 22:47', 'mu'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "mo" results in false')
console.log(includes('hola mundo, son las 22:47', 'mo'))
//false

console.log('CASE for string "hola mundo, son las 22:47" includes "la" results in true')
console.log(includes('hola mundo, son las 22:47', 'la'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "la " results in true')
console.log(includes('hola mundo, son las 22:47', 'la '))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "las" results in true')
console.log(includes('hola mundo, son las 22:47', 'las'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "law" results in false')
console.log(includes('hola mundo, son las 22:47', 'law'))
//false

console.log('CASE for string "hola mundo, son las 22:47" includes "wo" results in false')
console.log(includes('hola mundo, son las 22:47', 'wo'))
//false

console.log('CASE for string "hola mundo, son las 22:47" includes "mund" results in true')
console.log(includes('hola mundo, son las 22:47', 'mund'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "son las 22:47" results in true')
console.log(includes('hola mundo, son las 22:47', 'son las 22:47'))
//true

console.log('CASE for string "hola mundo, son las 22:47" includes "son las 22:48" results in false')
console.log(includes('hola mundo, son las 22:47', 'son las 22:48'))
//false