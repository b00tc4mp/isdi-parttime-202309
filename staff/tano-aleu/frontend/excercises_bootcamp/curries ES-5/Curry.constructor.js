function Curry() {
    // Si hay solo un argumento y es un número entero no negativo
    if (arguments.length === 1) {
        if (Number.isInteger(arguments[0]) && arguments[0] >= 0) {
            // Configura la propiedad 'length' del objeto Curry
            this.length = arguments[0];
            return;
        } else if (Number.isInteger(arguments[0]) && arguments[0] < 0 || typeof arguments[0] === 'number' && !Number.isInteger(arguments[0])) {
            // Lanza un error si el argumento no es un número entero no negativo
            throw new RangeError('Invalid curry length');
        }
    }

    // Itera sobre los argumentos y los asigna como propiedades del objeto Curry
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        this[i] = argument;
    }

    // Configura la propiedad 'length' del objeto Curry
    this.length = arguments.length;
}



// Resumen de la función Curry:

// Propósito: La función Curry actúa como un constructor para objetos Curry. Estos objetos pueden ser creados con valores individuales o con una longitud específica.

// Implementación:

// Si hay solo un argumento y es un número entero no negativo, configura la propiedad 'length' del objeto Curry y retorna.
// Si el argumento no es un número entero no negativo, lanza un error (RangeError).
// Si no se cumplen las condiciones anteriores, itera sobre los argumentos y los asigna como propiedades del objeto Curry.
// Configura la propiedad 'length' del objeto Curry con la cantidad total de argumentos.



// Explicación paso a paso:

// 1.Verificación del número de argumentos:

// Si hay solo un argumento y es un número entero no negativo, se configura la propiedad length del objeto Curry y la función retorna.


// 2.Manejo de errores:

// Si el argumento no es un número entero no negativo, se lanza un error (RangeError).


// 3.Iteración sobre los argumentos:

// Si no se cumplen las condiciones anteriores, la función itera sobre los argumentos y los asigna como propiedades del objeto Curry.


// 4.Configuración de la propiedad 'length':

// Configura la propiedad length del objeto Curry con la cantidad total de argumentos.