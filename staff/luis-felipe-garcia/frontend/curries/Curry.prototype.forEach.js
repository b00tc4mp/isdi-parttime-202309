Curry.prototype.forEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i])
    }
}