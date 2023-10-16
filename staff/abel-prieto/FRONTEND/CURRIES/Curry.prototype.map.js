Curry.prototype.map = function (callback) {
    var newCurry = new Array(this.length)

    for (i = 0; i < this.length; i++) {
        var element = this[i]

        newCurry[i] = callback(element)
    }

    return newCurry
}