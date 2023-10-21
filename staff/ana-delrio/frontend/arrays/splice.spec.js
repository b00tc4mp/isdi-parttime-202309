// El método splice en JavaScript se utiliza para modificar el contenido de un array al eliminar, 
// reemplazar o agregar elementos en posiciones específicas del array
// devuelve el elemento borrado 

console.log('TEST splice')
console.log('CASE replace one element')

var months = ['Jan', 'Feb', 'March', 'April', 'June']

// 'array' es el array en el que vamos a realizar la operación
// 'start' es el índice donde comenzaremos la operación, en este caso, 4
// 'removeCount' es la cantidad de elementos que vamos a eliminar, en este caso, 1
// 'item' es el elemento con el que reemplazaremos el elemento eliminado, en este caso, 'May'
var removed = splice(months, 4, 1, 'May')

console.log(months)
// ['Jan', 'Feb', 'March', 'April', 'May']

console.log(removed)
// ['June']


console.log('-------------------------------------------------')



console.log('CASE insert one element')

var months = ['Jan', 'March', 'April']

// el cero significa que no quiero borrar ningún elmeento, solo insertar un elemento
// 'array' es el array en el que vamos a realizar la operación.
// 'start' es el índice donde comenzaremos la operación, en este caso, 1.
// 'removeCount' es la cantidad de elementos que vamos a eliminar, en este caso, 0 (significa que no eliminaremos nada).
// 'item' es el elemento que vamos a insertar en la posición especificada, en este caso, 'Feb'.
var removed = splice(months, 1, 0, 'Feb')

console.log(months)
// ['Jan', 'Feb', 'March', 'April']

console.log(removed)
// []


console.log('-------------------------------------------------')



console.log('CASE remove 0 (zero) elements before index 2, and insert "drum" and "guitar"')

var fish = ['angel', 'clown', 'mandarin', 'sturgeon']

var removed = splice(fish, 2, 0, 'drum', 'guitar')

console.log(fish)
// ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

console.log(removed)
// []



console.log('-------------------------------------------------')




console.log('CASE remove 1 element at index 3')

var fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

var removed = splice(fish, 3, 1)

console.log(fish)
// ['angel', 'clown', 'drum', 'sturgeon']

console.log(removed)
// ['mandarin']


console.log('-------------------------------------------------')




console.log('CASE remove 2 elements from index 3')

var fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'sword']

var removed = splice(fish, 3, 2)

console.log(fish)
// ['angel', 'clown', 'drum', 'sword']

console.log(removed)
// ['mandarin', 'sturgeon']