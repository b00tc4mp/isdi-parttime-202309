function includes(string, textToFind) {

	var firstCharToFind = textToFind[0]

	for (var indexString = 0; indexString < string.length; indexString++) {
		var character = string[indexString]

		if (character === firstCharToFind && textToFind.length === 1) {
			return true

		} else if (character === firstCharToFind && textToFind.length > 1) {

			for (var index = 1; index < textToFind.length; index++) {
				var charToFind = textToFind[index]

				if (index + 1 === textToFind.length)
					return true

				else if (charToFind !== string[indexString++])
					return false

			}
			return true
		}
	}
	return false
}

// falla a partir del 3r caracter


