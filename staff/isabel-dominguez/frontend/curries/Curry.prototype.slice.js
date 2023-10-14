Curry.prototype.slice = function (start, end) {
    start = start || 0
    end = end || this.length

    var slicedCurry = new Curry()

    for (var i = start; i < end; i++) {
        if (i < 0 || i >= this.length) {
            continue
        }
        slicedCurry[slicedCurry.length] = this[i]
        slicedCurry.length++
    }

    return slicedCurry
}
