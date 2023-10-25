console.log('TEST join - array')
var array1 = [0, 1, 'Hola', 'mundo']

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

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