console.log('TEST join - array')

console.log("CASE for array1 = [0, 1, 'Hola', 'mundo'] y element = '-' results is '0-1-Hola-mundo'")
console.log(join(array1, '-'))
//'0-1-Hola-mundo'

console.log("CASE for array1 = [0, 1, 'Hola', 'mundo'] y element = ' ' results is '0-1-Hola-mundo'")
console.log(join(array1, ' '))
//'0-1-Hola-mundo'

console.log("CASE for array1 = [] y element = '-' results is '-'")
console.log(join([], '-'))
//'0-1-Hola-mundo'

console.log('-----------------------------------------')