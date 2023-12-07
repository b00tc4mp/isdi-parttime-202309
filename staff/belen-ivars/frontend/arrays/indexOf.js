function indexOf(array, searchArray) {
	for (var i = 0; i < array.length; i++) {

		var result = array[i]
		if (result === searchArray)
			return i
	}
	return -1
}