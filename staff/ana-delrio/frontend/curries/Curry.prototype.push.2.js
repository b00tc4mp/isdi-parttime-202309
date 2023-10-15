
// Define un método 'push' en el prototipo de la función constructora Curry
Curry.prototype.push = function (item) {
    // Agrega el primer elemento al final del objeto
    this[this.length] = item
    this.length++

    // Verifica si se pasaron más de un argumento
    if (arguments.length > 1)
        // Itera a través de los argumentos adicionales
        for (var i = 1; i < arguments.length; i++) {
            // Agrega los elementos adicionales al final del objeto
            this[this.length] = arguments[i]
            this.length++
        }

    // Devuelve la longitud actualizada del objeto
    return this.length
}