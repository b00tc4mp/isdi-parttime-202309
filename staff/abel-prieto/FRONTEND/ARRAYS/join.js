function join(array, element) {
    var result = array[0]
    
    if (element === undefined)
        element = ","

    for (var i = 1; i < array.length; i++) {
        result += element + array[i]
    }

    return result
}
