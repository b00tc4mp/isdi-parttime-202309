// El método join en JavaScript se utiliza para combinar todos los elementos de un array en una sola cadena de texto y devuelve esa cadena
// Puedes especificar un separador opcional que se coloca entre cada elemento del array en la cadena resultante 

var arrayvegan = ['tomato', 'carrot', 'pumpkin']

function join(array, separator) {
    let result = ""
    // establecemos una cadena vacía para almacenar el resultado
    for (let i = 0; i < array.length; i++) {
        array[i] += result
        // concatenamos el elemento actual del array con la variable 'result'
        if (i < array.length - 1) {
            // La condición i < array.length - 1 verifica si i es menor que el índice del último elemento del array. 
            // Si es así, significa que i no está en el último elemento del array
            // Si la condición es verdadera, significa que estamos en un elemento que no es el último, por lo tanto, se agrega el separator a la variable result.
            result += separator
        }
    }
    return result
    // Devuelve la cadena 'result' que contiene los elementos del array concatenados con el 'separator'
}

