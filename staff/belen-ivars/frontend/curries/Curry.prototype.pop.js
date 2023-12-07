Curry.prototype.pop = function () {
	if (!this.length) return undefined


	var lastElement = this[this.length - 1]
	delete this[--this.length]

	return lastElement
}