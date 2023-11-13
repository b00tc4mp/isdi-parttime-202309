Curry.prototype.at = function (index) {
    return this[index >= 0 ? index : this.length + index]

}