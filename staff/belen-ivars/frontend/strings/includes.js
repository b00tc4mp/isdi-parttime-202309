function includes(string, textToFind) {

	for (var index in textToFind)
		var charToFind = textToFind[index]

	for (var character of string) {
		if (character === charToFind) {
			do {
				character++
				charToFind++

			} while (character === charToFind && index < textToFind.length)
			return true

		}
	}
	return false
}

