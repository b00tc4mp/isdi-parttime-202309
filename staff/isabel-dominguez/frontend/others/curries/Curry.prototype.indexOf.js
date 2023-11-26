Curry.prototype.indexOf = function (searchElement) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i
        }
    }
    return -1
}
