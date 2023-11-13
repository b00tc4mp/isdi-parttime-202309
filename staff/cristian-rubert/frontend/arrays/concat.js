function concat() {
    var newArray = []

    for (var i = 0; i < arguments.length; i++) {
        newArray[newArray.length] = arguments[i]
    }
    
    return newArray
}
