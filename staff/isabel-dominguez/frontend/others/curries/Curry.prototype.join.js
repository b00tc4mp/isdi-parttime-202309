Curry.prototype.join = function (separator) {
    var result = ""

    if (separator === undefined)
        separator = ","

    for (var i = 0; i < this.length; i++) {
        result += this[i]

        if (i < this.length - 1) {
            result += separator
        }
    }

    return result
}
