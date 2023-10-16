
function at(array, index) {
	return array[index >= 0 ? index : array.length + index]
}

/*

if (index >= 0 && index < array.length) {

		return array[index]

	} else if (index < 0) {

		var position = array.length + (index)

		return array[position]
	}

	return undefined

*/