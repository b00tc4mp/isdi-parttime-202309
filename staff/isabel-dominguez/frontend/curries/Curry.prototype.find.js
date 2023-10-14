Curry.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i]
        }
    }
    return -1
}
