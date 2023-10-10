function push(array, object) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }

    newArray[newArray.length] = object

    return newArray
}