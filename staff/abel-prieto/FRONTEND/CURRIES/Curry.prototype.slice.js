Curry.prototype.slice = function (start, end) {
    var newCurry = []

    if (start > this.length) {
        return newCurry
    }

    if (start === null) {
        for (var i = 0; i < end; i++) {
            newCurry[newCurry.length] = this[i]

        }
    }

    for (var i = start; i < end; i++) {
        newCurry[newCurry.length] = this[i]

    }

    return newCurry
}