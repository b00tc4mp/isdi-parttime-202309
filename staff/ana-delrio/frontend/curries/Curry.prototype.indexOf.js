
// Método 'indexOf' añadido al prototipo de la función Curry
Curry.prototype.indexOf = function (searchElement) {
    for (var i = 0; i < this.length; i++) {
        // Compara cada elemento en la instancia de Curry con 'searchElement'
        if (this[i] === searchElement) {
            // Si encuentra una coincidencia, devuelve el índice
            return i
        }
    }
    return -1
}