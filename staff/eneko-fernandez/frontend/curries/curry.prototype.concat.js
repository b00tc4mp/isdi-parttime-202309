Curry.prototype.concat = function () {
    var concatenatedArrays = []

    for (var i = 0; i < this.length; i++) {
        concatenatedArrays[concatenatedArrays.length] = this[i]
    }

    for (var i = 0; i < arguments.length; i++) {
        for (var k = 0; k < arguments[i].length; k++) {
            concatenatedArrays[concatenatedArrays.length] = arguments[i][k]
            this[concatenatedArrays.length - 1] = arguments[i][k]
            this.length++
        }
    }

    return concatenatedArrays
}

