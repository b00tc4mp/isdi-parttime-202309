console.log('TEST at')

console.log('CASE for arrays "hola mundo" at 0 should result in "h"')
console.log(at('hola mundo', 0))
// "h"

console.log('CASE for arrays "hola mundo" at 4 should result in " "')
console.log('>', at('hola mundo', 4), '<')
// " "

console.log('CASE for arrays "hola mundo" at 10 should result in ""')
console.log('>', at('hola mundo', 10), '<')
// ""