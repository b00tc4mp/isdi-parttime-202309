
function includes(string, textToFind) { // Declaración de la función includes con dos parámetros: string y textToFind
    var numberOfCahrs = textToFind.length // Calcula la longitud de la cadena a buscar (numberOfCahrs = 11, en este caso 'de uniforme')

    for (var i = 0; i < string.length; i++) { // Bucle que recorre cada posición en la cadena "string" ('un día vi una vaca vestida de uniforme')
        //console.count('loop')//

        var stringSplices = '' // Inicializa una variable para almacenar fragmentos de la cadena

        for (var k = 0; k < numberOfCahrs; k++) { // Bucle anidado que recorre cada posición en la cadena "textToFind" (k = 0 a 10)
            //console.count('loop')//

            stringSplices += [i + k] // Concatena caracteres de la cadena "string" usando el valor de i + k

            // Por ejemplo, cuando i=3 y k=2, esto concatena el carácter en la posición 5 del string "un día vi una vaca vestida de uniforme"
            // a "stringSplices", lo que en este caso sería la letra 'í'
        }

        if (stringSplices === textToFind) { // Comprueba si el fragmento creado es igual a "textToFind"
            return true // Si es igual, devuelve true, indicando que se encontró "textToFind" en "string"
        }
    }

    return false // Si no se encontró "textToFind" en ningún fragmento de "string", devuelve false
}