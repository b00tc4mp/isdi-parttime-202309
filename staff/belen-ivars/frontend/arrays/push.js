var array = [0, 1, 'Hola', 'mundo']

function push(array, item) {

	array[array.length] = item
	// console.log(array) ACTIVAR para comprobar si modifica el array
	return array.length
}