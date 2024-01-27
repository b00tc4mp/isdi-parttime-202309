// POLYFILLS

if (typeof Array.prototype.forEachReverse === 'undefined')
    Array.prototype.forEachReverse = function (callback) {
        for (var i = this.length - 1; i > -1; i--)
            callback(this[i], i, this)
    }

/*Un polyfill es un método utilizado en programación para proporcionar funcionalidades que no son nativas en ciertos navegadores o entornos. Es una forma de rellenar o suplir las carencias de un navegador o entorno con código adicional.

Un ejemplo común de polyfill es el uso de JavaScript para proporcionar funcionalidades de HTML5 en navegadores más antiguos que no las soportan nativamente.

---> (también) --->

Un polyfill es un código que proporciona una implementación de una característica que el navegador aún no admite. Esto permite a los desarrolladores utilizar características modernas de JavaScript y CSS en navegadores más antiguos que no las admiten nativamente.

Algunos ejemplos de polyfills populares incluyen:

Babel: un compilador de JavaScript que permite a los desarrolladores utilizar características de JavaScript moderno y compilarlo a una versión que sea compatible con navegadores más antiguos.

HTML5 Shiv: un polyfill que permite a los navegadores antiguos admitir las nuevas etiquetas de HTML5.

Flexibility: un polyfill que agrega soporte para el diseño flexible en navegadores que no lo admiten nativamente.*/
