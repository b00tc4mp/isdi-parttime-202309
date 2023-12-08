
function concat(array1, array2) { 
    var result = array1
    for (var i = 0; i < array2.length; i++){
        result[result.length] = array2[i]
    }
    return result
}
