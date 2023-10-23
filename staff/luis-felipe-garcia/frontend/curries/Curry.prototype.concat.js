Curry.prototype.concat = function () {
    var output = new Curry()

    for (i = 0; i < this.length; i++) {
        output[i] = this[i]
        output.length++
    }

    for (i = 0; i < arguments.length; i++) {
        for (j = 0; j < arguments[i].length; j++) {
            output[output.length + this.length] = arguments[i][j]
            output.length++
        }
    }

    return output
}
