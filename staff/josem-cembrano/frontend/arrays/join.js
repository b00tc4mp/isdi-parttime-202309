var join = function (array, element) {
    var joinElement = ''
    if (element === undefined)
        element = "-"
    for (var i = 0; i < array.length; i++) {
        joinElement += array[i]
        if (i < array.length - 1) {
            joinElement += element

        }
    }
    return joinElement
}
