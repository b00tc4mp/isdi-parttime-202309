Curry.prototype.pop = function () {
	//var lastElement = undefined
	if (this.length === 0) {
		delete this.length
		return undefined
	}

	var lastElement = this[this.length - 1]
	delete this[this.length - 1]
	this.length--

	return lastElement
}