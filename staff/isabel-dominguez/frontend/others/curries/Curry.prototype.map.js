Curry.prototype.map = function (callback) {
    var result = new Curry()

    for (var i = 0; i < this.length; i++) {
        result[i] = callback(this[i])
    }

    result.length = this.length
    return result
}
