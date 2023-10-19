console.log('TEST includes')

console.log('CASE for string "hola mundo" includes "m" returns true')
console.log(includes('hola mundo', 'm'))
// true

console.log('CASE for string "hola mundo" includes "w" returns false')
console.log(includes('hola mundo', 'w'))
// false

console.log('CASE for string "hola mundo" includes "h" returns true')
console.log(includes('hola mundo', 'h'))
// true

console.log('CASE for string "hola mundo" includes "o" returns true')
console.log(includes('hola mundo', 'o'))
// true

console.log('CASE for string "hola mundo" includes "mu" returns true')
console.log(includes('hola mundo', 'mu'))
// true

console.log('CASE for string "hola mundo" includes "mo" returns true')
console.log(includes('hola mundo', 'mo'))
// false

console.log('CASE for string "hola mundo" includes "mun" returns true')
console.log(includes('hola mundo', 'mun'))
// true

console.log('CASE for string "hola mundo" includes "la " returns true')
console.log(includes('hola mundo', 'la '))
// true

console.log('CASE for string "hola mundo" includes "don " returns false')
console.log(includes('hola mundo', 'don'))
// false

console.log('CASE for string "hola mundo" includes "mund" returns true')
console.log(includes('hola mundo', 'mund'))
// true

console.log('CASE for string "hola mundo" includes "ola " returns true')
console.log(includes('hola mundo', 'ola '))
// true

console.log('CASE for string "hola mundo" includes "dond" returns false')
console.log(includes('hola mundo', 'dond'))
// false