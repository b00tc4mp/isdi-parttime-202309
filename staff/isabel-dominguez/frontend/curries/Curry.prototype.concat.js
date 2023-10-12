Curry.prototype.concat = function () {
    var concatenatedArray = []

    for (var i = 0; i < this.length; i++) {
        concatenatedArray[concatenatedArray.length] = this[i]
    }

    for (var i = 0; i < arguments.length; i++) {
        var currentArray = arguments[i]
        for (var j = 0; j < currentArray.length; j++) {
            concatenatedArray[concatenatedArray.length] = currentArray[j]
        }
    }

    for (var i = 0; i < concatenatedArray.length; i++) {
        this[i] = concatenatedArray[i]
    }

    this.length = concatenatedArray.length

    return this
}

