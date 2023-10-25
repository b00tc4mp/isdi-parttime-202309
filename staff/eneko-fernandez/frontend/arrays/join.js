function join(array, separator) {
    var joinedArray = ''
    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1)
            joinedArray += array[i]
        else
            joinedArray += array[i] + separator
    }

    return joinedArray
}