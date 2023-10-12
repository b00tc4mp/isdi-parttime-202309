// El método join en JavaScript se utiliza para combinar todos los elementos de un array en una sola cadena de texto y devuelve esa cadena
// Puedes especificar un separador opcional que se coloca entre cada elemento del array en la cadena resultante 
// Devuelve un string, no un array 


/* function join(array, separator) {
    var result = ''
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
} */

var arrayvegan = ['tomato', 'carrot', 'pumpkin']

console.log('CASE for arrayvegan array with comma and space should return the string "tomatocarrotpumpkin"')
console.log(join(arrayvegan, ','))
//'tomatocarrotpumpkin'

function join(array, separator) {
    var newString = ''
    for (var i = 0; i < array.length; i++) {
        // Verifica si el índice i es igual al índice del último elemento del array. 
        // Si esta condición es verdadera, significa que i apunta al último elemento del array
        // Si estamos en el último elemento del array, se ejecuta el bloque de código dentro del if.
        // Esto se debe a que, al estar en el último elemento, no queremos agregar el separador 
        // después de este elemento, ya que no hay más elementos que seguirán en el array.
        if (i === array.length - 1) {
            // esto significa que estamos concatenando el último elemento del array 
            // al final de la cadena newString, pero sin agregar el separador
            newString += array[i]
            //  la función return newString; finaliza la función join y devuelve la cadena resultante. 
            // Esto es importante porque hemos llegado al último elemento y ya no necesitamos continuar recorriendo el array.
            return newString
        }
        //En este caso, el elemento actual se agrega a la cadena newString, 
        //pero con el separador después de él. Esto asegura que los elementos se separen con el separador especificado, 
        // excepto el último elemento.
        newString += array[i] + separator
    }
    return newString
}

