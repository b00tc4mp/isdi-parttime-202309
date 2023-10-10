function includes(string, textToFind) {
    var numberOfCahrs = textToFind.length
    var stringSpliced = ''
    for (var i = 0; i < string.length; i++) {
        console.count('loop')
        stringSpliced = string.slice(i, i + numberOfCahrs)
        if (stringSpliced === textToFind) return true
    }
    return false
}

///// ALTERNATIVA SIN USO MÉTODOS /////
function includes2(string, textToFind) {
    var numberOfCahrs = textToFind.length
    for (var i = 0; i < string.length; i++) {
        console.count('loop')
        var stringSpliced = ''
        for (var k = 0; k < numberOfCahrs; k++) {
            console.count('loop')
            stringSpliced += string[i + k]
        }
        if (stringSpliced === textToFind) return true
    }
    return false
}
