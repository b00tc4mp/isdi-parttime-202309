Curry.prototype.unshift = function () {
    var numberOfArguments = arguments.length
    for (i = this.length - 1; i > -1; i--) {
        this[i + numberOfArguments] = this[i]
    }

    for (i = 0; i < arguments.length; i++) {
        this[i] = arguments[i]
    }
    this.length += arguments.length
    console.log(this.length)
    return
}