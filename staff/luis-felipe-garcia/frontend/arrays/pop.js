
function pop(array1) {
    if (array1.length === 0) return undefined
    var elementToPop = array1[array1.length - 1]
    array1.length--
    return elementToPop
}