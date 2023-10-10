function concat(array1, array2, array3) {
    var finalArray = [];

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            finalArray[finalArray.length] = arguments[i][j];
        }
    }
    return finalArray
}


