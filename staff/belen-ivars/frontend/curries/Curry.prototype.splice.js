Curry.prototype.splice = function (start, removeCount, item) {
	if (removeCount === 0) {
		var displacement = arguments.length - 2

		if (displacement > 0)
			this.length = this.length + displacement

		for (var i = this.length - 1; i >= start; i--) {
			var element = this[i]

			this[i + displacement] = element

		}

		this[start] = item

		for (var i = 3; i < arguments.length; i++) {
			var element = arguments[i]

			this[start + i - 3] = element
		}

		return []
	} else if (removeCount === 1 && arguments.length === 3) {
		var elementToRemove = this[start]

		this[start] = item

		return [elementToRemove]
	} else if (removeCount >= 1) {
		var removed = []

		for (var i = start; i < this.length - 1; i++) {
			var elementToRemove = this[i]

			removed[removed.length] = elementToRemove

			var next = this[i + removeCount]

			this[i] = next
		}

		for (var i = this.length - removeCount; i < this.length; i++)
			delete this[i]

		this.length -= removeCount

		return removed
	}
}