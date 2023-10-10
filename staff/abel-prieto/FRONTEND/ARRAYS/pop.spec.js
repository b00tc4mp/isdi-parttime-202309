var array = ['Miguel', 'Cristina', 'Pedro', 'Raúl', 'Juan']

console.log('TEST ARRAYS - Method POP')

console.log('CASE for POP the initial array ["Miguel", "Cristina", "Pedro", "Raúl", "Juan"], remove the objet "Juan" fromlast position')
array = pop(array)
console.log(array)
// ["Miguel", "Cristina", "Pedro", "Raúl"]

console.log('CASE for POP the initial array ["Miguel", "Cristina", "Pedro", "Raúl"], remove the objet "Raúl" from last position')
array = pop(array)
console.log(array)
// ["Miguel", "Cristina", "Pedro"]

console.log('CASE for POP the initial array ["Miguel", "Cristina", "Pedro"], remove the objet "Pedro" from last position')
array = pop(array)
console.log(array)
// ["Miguel", "Cristina"]

console.log('- - - - - - - - - - - - - - - - - - - - - - - -')