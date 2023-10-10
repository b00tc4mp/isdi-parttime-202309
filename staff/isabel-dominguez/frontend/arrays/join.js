function join(array, separator) {
    var result = "";
    if (separator === undefined)
        separator = ",";
    for (var i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += separator;
        }
    }
    return result;
}

/*
- Cojo como parámetro el array y el separador
- Hago un for que me recorra el array y me guarde los strings en una variable.
- Hago una variable que guarde los strings del array.
- Hago un if que me añada el separator en el medio de cada string.
- Y por último me devuelve el resultado
*/