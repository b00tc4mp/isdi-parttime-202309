if (typeof Array.prototype.forEachReverse === 'undefined') {
    Array.prototype.forEachReverse = function (callback) {
        for (var i = this.length - 1; i > -1; i--)
            callback(this[i], i, this)
    }
}


// En JavaScript, se conocen como "polyfills" a piezas de código que se utilizan para agregar funcionalidad a un navegador web que no es compatible con ciertas características o métodos específicos de JavaScript o de las especificaciones del estándar web. Estos polyfills ayudan a garantizar que tu código JavaScript funcione de manera consistente en diferentes navegadores, incluso en aquellos que no admiten las últimas características de JavaScript o tecnologías web. Los polyfills se pueden utilizar para agregar métodos que no existen en un navegador o para modificar el comportamiento de métodos existentes.