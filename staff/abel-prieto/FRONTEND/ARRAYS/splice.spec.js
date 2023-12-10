// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

console.log('TEST ARRAYS - Method Splice')

console.log('CASE replace one element')

var months = ['Jan', 'Feb', 'March', 'Abril', 'June']
var removed = splice(months, 4, 1, 'May')

console.log(months)
// ['Jan', 'Feb', 'March', 'Abril', 'May']

console.log(removed)
// ['June']

console.log('CASE insert one element')

var months = ['Jan', 'March', 'Abril']
var removed = splice(months, 1, 0, 'Feb')

console.log(months)
// ['Jan', 'Feb', 'March', 'Abril']

console.log(removed)
// []


console.log('CASE insert two or more element')

var fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = splice(fish, 2, 0, 'drum', 'guitar');

console.log(fish)
// ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

console.log(removed)
// []

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')