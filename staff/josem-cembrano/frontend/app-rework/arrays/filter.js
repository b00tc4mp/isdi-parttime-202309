function filter(array, callback) {
    var newLastArray = []
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]))
            newLastArray[newLastArray.length] = array[i]
    }
    return newLastArray
}