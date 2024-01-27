function includes(string, textToFind) {
    // Verifica si la subcadena tiene longitud 1
    if (textToFind.length === 1) {
        // Itera sobre la cadena principal
        for (var i = 0; i < string.length; i++) {
            // Compara cada carácter en la cadena principal con la subcadena de longitud 1
            if (string[i] === textToFind) {
                // Si encuentra una coincidencia, devuelve true
                return true;
            }
        }
        // Si no encuentra ninguna coincidencia, devuelve false
        return false;
        
    } else if (textToFind.length === 2) {
        // Si la subcadena tiene longitud 2
        var charOne = textToFind[0];
        var charTwo = textToFind[1];
        // Itera sobre la cadena principal
        for (var i = 0; i < string.length; i++) {
            // Compara cada par de caracteres consecutivos en la cadena principal con la subcadena de longitud 2
            if (string[i] === charOne && string[i + 1] === charTwo) {
                // Si encuentra una coincidencia, devuelve true
                return true;
            }
        }
        // Si no encuentra ninguna coincidencia, devuelve false
        return false;

    } else if (textToFind.length === 3) {
        // Si la subcadena tiene longitud 3
        var charOne = textToFind[0];
        var charTwo = textToFind[1];
        var charThree = textToFind[2];
        // Itera sobre la cadena principal
        for (var i = 0; i < string.length; i++) {
            // Compara cada conjunto de tres caracteres consecutivos en la cadena principal con la subcadena de longitud 3
            if (string[i] === charOne && string[i + 1] === charTwo && string[i + 2] === charThree) {
                // Si encuentra una coincidencia, devuelve true
                return true;
            }
        }
        // Si no encuentra ninguna coincidencia, devuelve false
        return false;
    }
}



// Resumen de la función includes:


// Propósito: Determinar si una cadena contiene una subcadena específica de longitud 1, 2 o 3.


// Implementación:

// Verifica la longitud de la subcadena (textToFind) para determinar qué tipo de comparación realizará (1, 2 o 3 caracteres).
// Si la longitud es 1, itera sobre la cadena principal y compara cada carácter con la subcadena de longitud 1. Devuelve true si hay una coincidencia, false si no.
// Si la longitud es 2, utiliza dos variables (charOne y charTwo) para representar los caracteres de la subcadena. Itera sobre la cadena principal comparando cada par de caracteres consecutivos con la subcadena de longitud 2. Devuelve true si hay una coincidencia, false si no.
// Si la longitud es 3, utiliza tres variables (charOne, charTwo y charThree) para representar los caracteres de la subcadena. Itera sobre la cadena principal comparando cada conjunto de tres caracteres consecutivos con la subcadena de longitud 3. Devuelve true si hay una coincidencia, false si no.



// Explicación detallada:


// 1. La función includes toma dos argumentos: string (la cadena principal) y textToFind (la subcadena que se está buscando en la cadena principal).

// 2. La función utiliza una estructura condicional (if, else if) para determinar la longitud de la subcadena (textToFind) y ejecutar la lógica correspondiente.

// 3. Si la longitud de la subcadena es 1, la función itera sobre la cadena principal y compara cada carácter con la subcadena de longitud 1. Devuelve true si encuentra una coincidencia y false si no.

// 4. Si la longitud de la subcadena es 2, la función utiliza dos variables (charOne y charTwo) para representar los dos caracteres de la subcadena. Itera sobre la cadena principal comparando cada par de caracteres consecutivos con la subcadena de longitud 2. Devuelve true si encuentra una coincidencia y false si no.

// 5. Si la longitud de la subcadena es 3, la función utiliza tres variables (charOne, charTwo y charThree) para representar los tres caracteres de la subcadena. Itera sobre la cadena principal comparando cada conjunto de tres caracteres consecutivos con la subcadena de longitud 3. Devuelve true si encuentra una coincidencia y false si no.
