// Definición del método "pop" en el prototipo de "Curry"
Curry.prototype.pop = function () {

    // Verificamos si la propiedad "length" del objeto "Curry" no es falsa (es decir, si no está vacía)
    if (!this.length) return

    // Obtenemos el último elemento del objeto "Curry"
    var last = this[this.length - 1]

    // this.length accede a la propiedad length del curry
    // [--this.length] Primero, decrementa el valor de this.length en 1. Esto disminuye el contador de la cantidad de elementos en el objeto "Curry"
    // Luego, evalúa la expresión y devuelve el valor decrementado. En otras palabras, se obtiene el valor de this.length después de restar 1
    // Utiliza el operador delete para eliminar la propiedad que contiene el último elemento del objeto "Curry"
    delete this[--this.length]

    // Devolvemos el último elemento extraído
    return last
}