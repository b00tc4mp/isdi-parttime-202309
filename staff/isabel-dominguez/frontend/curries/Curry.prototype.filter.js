Curry.prototype.filter = function (callback) {
    var result = new Curry()

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {
            result[result.length] = element
            result.length++
        }
    }

    if (result.length === 0) {
        return new Curry()
    }

    return result
}
