function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var newLastArray = array[i]

        if (callback(array[i]))
            return newLastArray
    }
}