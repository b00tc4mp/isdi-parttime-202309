function filter(array, callback) {
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var index = array[i]

        if (callback(index)) {
            newArray[newArray.length] = index
        }
    }

    return newArray
}