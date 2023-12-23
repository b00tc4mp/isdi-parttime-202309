Curry.prototype.pop = function () {
    if (this.length === 0) return

    var lastElement = this[this.length - 1]

    delete this[--this.length]

    return lastElement
}