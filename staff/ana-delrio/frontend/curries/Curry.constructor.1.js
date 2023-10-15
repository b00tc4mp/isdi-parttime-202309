// En JavaScript, una función constructora es una función que se utiliza para crear objetos
// Estas funciones se llaman "constructoras" porque se utilizan para construir objetos a partir de una plantilla o prototipo
// Para crear un objeto utilizando una función constructora, se usa la palabra clave new antes de la llamada a la función



// creamos una función constructor (una función que se utiliza para crear objetos)
function Curry() {
    for (var i = 0; i < arguments.length; i++) {
        // asignamos una variable argument donde almacenaremos el valor del argumento actual 
        var argument = arguments[i]

        // aquí se asigna el valor del argumento actual al objeto this en la posición [i] 
        // el this hace referencia a la función curry
        this[i] = argument
    }

    // aquí establecemos la propiedad length del objeto this, en la longitud de los argumentos pasarpo por la función curry
    this.length = arguments.length

}

