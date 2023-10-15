// Number.isInteger() es una función incorporada en JavaScript
// para verificar si un número es un número entero


// DEFINIMOS la función curry 
function Curry() {
    // Verifica si se pasaron más de un argumento
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            // Asigna los argumentos a las propiedades del objeto 'this'
            this[i] = argument
        }

        // Establece la propiedad 'length' del objeto 'this' con la cantidad de argumentos
        this.length = arguments.length

        // Verifica si se pasó un solo argumento
    } else if (arguments.length === 1) {
        var argument = arguments[0]

        // Comprueba si el argumento es un número entero
        if (Number.isInteger(argument)) {
            // Asigna el argumento como el valor de la propiedad 'length'
            this.length = argument
        }
    }
}

