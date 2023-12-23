// Este método busca si en un string hay una determinada cadena de caracteres

function includes(string, textToFind) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === textToFind) {
            return true
        }
    }

    return false
}
