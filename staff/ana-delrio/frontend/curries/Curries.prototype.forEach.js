
// Agrega un método 'forEach' al prototipo de la función Curry
Curry.prototype.forEach = function (callback) {
    // El bucle for se utiliza para iterar a través de los elementos de Curry`
    for (var i = 0; i < this.length; i++) {
        // Obtiene el valor del elemento en la posición 'i'
        var v = this[i]
        // La función printElements se pasa como un callback al método forEach de la función Curry
        callback(v)
    }
}