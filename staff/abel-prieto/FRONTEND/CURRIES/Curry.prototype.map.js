Curry.prototype.map = function (callback) {
    var newCurry = new Curry()

    for (i = 0; i < this.length; i++) {
        var element = this[i]

        newCurry[i] = callback(element)
        newCurry.length++
    }

    return newCurry
}