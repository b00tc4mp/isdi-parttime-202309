
function pop(array) {

	if (!array.length)
		return

	var element = array[array.length - 1]
	array.length--

	return element

}

