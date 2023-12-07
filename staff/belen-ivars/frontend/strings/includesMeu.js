function includes(string, textToFind) {
	var firstCharToFind = textToFind[0]
	var index = 0

	for (var indexString = 0; indexString < string.length; indexString++) {
		var character = string[indexString]

		//console.count('loop')
		if (character === firstCharToFind && textToFind.length === 1) {
			return true

		} else if (character === firstCharToFind && textToFind.length > 1) {

			while (string[indexString] === textToFind[index] && index < textToFind.length) {
				//	console.count('loop')
				if (index === textToFind.length - 1)
					return true

				indexString++
				index++
			}
		}
	}
	return false
}
