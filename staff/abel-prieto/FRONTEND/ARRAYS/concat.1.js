function concat(array1, array2) {
    var newArray = []

    for (var i = 0; i < array1.length; i++) {
        newArray[newArray.length] = array1[i]
    }
    
    for (var j = 0; j < array2.length; j++) {
        newArray[newArray.length] = array2[j]
    }
    
    return newArray
}
