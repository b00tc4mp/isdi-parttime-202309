

// Define la función constructora Curry
function Curry() {
    // Verifica si se pasó un solo argumento, si es un número entero y si es mayor o igual a 0
    if (arguments.length === 1 && Number.isInteger(arguments[0]) && arguments[0] >= 0) {
        // Si se cumple la condición, asigna ese número como el valor de la propiedad 'length'
        this.length = arguments[0]


        // Verifica si se pasó un solo argumento, si es un número entero y si es menor que 0, 
        // o si se pasó un solo argumento, si es de tipo 'number' y no es un número entero
    } else if (arguments.length === 1 && Number.isInteger(arguments[0]) && arguments[0] < 0 ||
        arguments.length === 1 && typeof arguments[0] === 'number' && !Number.isInteger(arguments[0])) {
        // Si se cumple la condición, lanza un error de rango con el mensaje 'Invalid curry length'
        throw new RangeError('Invalid curry length')

        // Si no se cumple ninguna de las condiciones anteriores
    } else {
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            // Asigna los argumentos a propiedades numeradas del objeto 'this'
            this[i] = argument
        }

        // Establece la propiedad 'length' con la cantidad de argumentos pasados
        this.length = arguments.length
    }
}

