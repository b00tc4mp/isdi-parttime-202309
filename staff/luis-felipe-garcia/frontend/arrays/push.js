
function push(array1, newElements) {
    if (typeof (newElements) === 'object') {
        for (newElement of newElements) {
            array1[array1.length] = newElement
        }
    } else {
        array1[array1.length] = newElements
    }

    return array1


}
