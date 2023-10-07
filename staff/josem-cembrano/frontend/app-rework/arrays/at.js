/*
•Recorrer el array con for, de esta manera lo iteramos y conseguimos su extension.
•*/



var at = function (arrays, searchPositionWithNumber) {
    for (var i = 0; i < arrays.length; i++) {
        if (searchPositionWithNumber === i) {
            return arrays[i]
        }

    }
    return undefined
}
