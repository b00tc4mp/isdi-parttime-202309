Curry.prototype.forEach = function (callback) {
	for (var i = 0; i < this.length; i++) {

		var v = this[i]

		callback(v)
	}
}

/* function forEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		var v = array[i]

		callback(v)
	}
} */