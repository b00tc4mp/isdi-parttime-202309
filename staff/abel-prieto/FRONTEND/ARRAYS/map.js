function map(array, callback) {
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var index = array[i]
        newArray[i] = callback(index)
    }
    
    return newArray
}