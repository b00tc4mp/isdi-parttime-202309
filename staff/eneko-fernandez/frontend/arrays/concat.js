// function concat(...arraysToConcat) {
//     var concatedArrays = []

//     for (var i = 0; i < arraysToConcat.length; i++) {
//         concatedArrays = [...concatedArrays, ...arraysToConcat[i]]
//     }

//     return concatedArrays
// }

function concat() {
    var concatenatedArrays = []

    for (var i = 0; i < arguments.length; i++) {
        for (var k = 0; k < arguments[i].length; k++) {
            concatenatedArrays[concatenatedArrays.length] = arguments[i][k]
        }
    }

    return concatenatedArrays
}