function includes(string, textToFind) {
    for (let i = 0; i <= string.length - textToFind.length; i++) {
        var found = true;
        for (let j = 0; j < textToFind.length; j++) {
            if (string[i + j] !== textToFind[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}


/*
La combinación de estos dos bucles permite buscar coincidencias de textToFind en la cadena string de manera eficiente. El primer bucle controla dónde comienza la búsqueda en string, mientras que el segundo bucle compara los caracteres para verificar si hay una coincidencia completa.
*/