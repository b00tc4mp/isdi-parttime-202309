
// Define un método 'push' en el prototipo de la función constructora Curry
Curry.prototype.push = function (item) {
    // Verifica si no se pasaron argumentos
    // el this hace referencia al objeto que apunta c, al curry
    if (!arguments.length)
        return this.length

    // Agrega el primer elemento al final del objeto y aumenta su propiedad 'length' en 1
    this[this.length] = item
    this.length++

    // Verifica si se pasaron más de un argumento
    if (arguments.length > 1)
        // Itera a través de los argumentos adicionales y los agrega uno por uno al final del objeto
        for (var i = 1; i < arguments.length; i++) {
            this[this.length] = arguments[i]
            this.length++
        }

    return this.length
} 