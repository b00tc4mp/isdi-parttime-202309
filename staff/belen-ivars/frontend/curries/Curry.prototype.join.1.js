Curry.prototype.join = function (separator) {

	if (separator === undefined)
		separator = ','

	if (separator === true)
		separator = 'true'

	if (separator === false)
		separator = 'false'

	if (separator === null)
		separator = 'null'

	var string = ''

	for (var i = 0; i < this.length; i++) {
		var element = this[i]

		if (i < this.length - 1)
			string += element + separator

		else
			string += element
	}
	return string
}