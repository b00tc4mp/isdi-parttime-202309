Curry.prototype.at = function (index) {

	return this[index >= 0 ? index : this.length + index]


}

/* function at(array, index) {
	return array[index >= 0 ? index : array.length + index]
} */