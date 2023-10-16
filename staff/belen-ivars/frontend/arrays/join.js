/* STEPS
- Recorrer array y extraer el valor de cada elemento.
- Si el array está vacío, devuelve string vacío.
- Devolver los valores separados por el segundo parámetro. Si este está vacío, separar con comas.
- Si el array es null o undefined, devolver como string 'null' o 'undefined'
*/


function join(array, separator) {
	var result = array[0]
	var element = separator

	if (array.length === 0) {
		result = ''
	}

	if (array.length >= 1) {
		for (var i = 1; i < array.length; i++) {

			if (separator === '') {
				element = ','
			}
			result = result + element + array[i]
		}
	}
	return result
}