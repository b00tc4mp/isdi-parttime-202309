Curry.prototype.concat = function () {
    var concatenatedArray = []

    for (var i = 0; i < this.length; i++) {
        concatenatedArray[concatenatedArray.length] = this[i]
    }

    for (var i = 0; i < arguments.length; i++) {  //Este itera sobre los arrays pasados como argumentos
        var otherArrays = arguments[i]
        for (var j = 0; j < otherArrays.length; j++) {  // Este itera sobre los elementos de los arrays
            concatenatedArray[concatenatedArray.length] = otherArrays[j]
        }
    }

    return concatenatedArray
}

