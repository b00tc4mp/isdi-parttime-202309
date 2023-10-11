function slice(array, start, end) {
    var newArray = []

    for(var i = start; i < end; i++) {
        newArray[newArray.length] = array[i]
        
    }

    return newArray
}