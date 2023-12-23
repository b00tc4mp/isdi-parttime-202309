// la versión 3 y 4 son igaules, y sirven las los casos del spec 3 y 4


// Define la función constructora Curry
function Curry() {
    // Verifica si se pasó un solo argumento y si ese argumento es un número entero
    if (arguments.length === 1 && Number.isInteger(arguments[0])) {
        // Si se cumple la condición, asigna ese argumento como el valor de la propiedad 'length'
        this.length = arguments[0]

        // Si no se cumple la condición anterior
    } else {
        // Itera a través de los argumentos pasados
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            // Asigna los argumentos a propiedades numeradas del objeto 'this'
            // this hace referencia a curry
            this[i] = argument
        }
        // Establece la propiedad 'length' con la cantidad de argumentos pasados
        this.length = arguments.length
    }
}
