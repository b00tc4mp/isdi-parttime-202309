
function join(array1, element) {
    var result = array1[0]
    if (array1.length >= 1) {
        for (var i = 1; i < array1.length; i++) {
            result = result + element + array1[i]
        }
    } else result = element.toString()
    return result
}