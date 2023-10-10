function concat() {
    var output = []
    for (i = 0; i < arguments.length; i++) {
        for (j = 0; j < arguments[i].length; j++) {
            output[output.length] = arguments[i][j]
        }
    }
    return output
}
