
// Verificamos si el método forEachReverse no está definido en el prototipo de Array
if (typeof Array.prototype.forEachReverse === 'undefined')

    // Si no está definido, creamos un polyfill para él

    // Definimos un nuevo método forEachReverse en el prototipo de Array
    Array.prototype.forEachReverse = function (callback) {
        // Iteramos a través del array desde el último elemento hasta el primero
        for (var i = this.length - 1; i > -1; i--)

            // Llamamos a la función de devolución de llamada (callback) con cada elemento del array
            // El callback toma tres argumentos: el valor del elemento, el índice y el array original. particularidades del forEach
            callback(this[i], i, this)
    }  