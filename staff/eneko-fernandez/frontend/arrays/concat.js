function concat(...arraysToConcat) {
    var concatedArrays = []

    for (var i = 0; i < arraysToConcat.length; i++) {
        concatedArrays = [...concatedArrays, ...arraysToConcat[i]]
    }

    return concatedArrays
}