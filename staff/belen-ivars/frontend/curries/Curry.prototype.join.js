Curry.prototype.join = function (separator) {


	if (separator === false || separator === true || separator === null)
		separator = "" + separator


	if (separator === undefined)
		separator = ','

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