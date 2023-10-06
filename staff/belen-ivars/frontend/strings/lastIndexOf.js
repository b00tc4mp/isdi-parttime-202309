function lastIndexOf(string, searchString) {
	for (var index = string.length - 1; index >= 0; index--) {

		if (string[index] === searchString)
			return index
	}

	return -1
}