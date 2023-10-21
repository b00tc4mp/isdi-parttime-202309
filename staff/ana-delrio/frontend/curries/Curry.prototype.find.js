
// Agrega un método 'find' al prototipo de la función Curry
Curry.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        // Llama a la función de callback con el elemento actual y verifica si devuelve verdadero
        if (callback(this[i])) {
            // Si la función de callback devuelve verdadero, devuelve el elemento actual
            return this[i]
        }
    }
    return -1
}