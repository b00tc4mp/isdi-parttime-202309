
// DEFINIMOS un método 'push' en el prototipo de la función constructora Curry
Curry.prototype.push = function (item) {
    // Agrega el nuevo elemento al final del objeto
    this[this.length] = item
    // Incrementa la propiedad 'length' para reflejar el nuevo tamaño del objeto
    // Incrementa la propiedad length en 1 para reflejar el nuevo tamaño del objeto. Después de agregar el elemento, length se establece en 4
    this.length++

    return this.length
} 