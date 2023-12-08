
function join(array1, element = ',') {
    // check array or object and asign variables to use later
    if (typeof (array1[0]) !== 'object') {
        var result = array1[0]
        var firstIndex = 1
    } else {
        var result = ''
        var firstIndex = 0
    }

    if (array1.length >= 1) {
        for (var i = firstIndex; i < array1.length; i++) { // iterate array
            if (typeof (array1[i]) !== 'object') {
                result = result + element + array1[i]
            } else { // iterate element of object
                for (var j = 0; j < array1[i].length; j++) {
                    result = result + array1[i][j] + element
                }

            }
        } if (result[result.length - 1] === element)
            result = result.slice(0, -1)
    } else result = element.toString() // if array is empty

    return result
}
