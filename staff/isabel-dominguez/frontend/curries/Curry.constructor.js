function Curry() {
    if (arguments.length === 1)
        if (Number.isInteger(arguments[0]) && arguments[0] >= 0) {
            this.length = arguments[0]

            return
        } else if (Number.isInteger(arguments[0]) && arguments[0] < 0 || typeof arguments[0] === 'number' && !Number.isInteger(arguments[0]))
            throw new RangeError('Invalid curry length')

    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[i] = argument
    }

    this.length = arguments.length
}


// "this" se utiliza en un constructor para acceder y modificar las propiedades del objeto que se está construyendo en ese momento.

// Curry es una función constructora 

/* Cuando agregas un método al prototipo de una función constructora (En nuestro caso Curry), al agregar el método (por ej. push) al prototipo de Curry, los objetos creados a partir de esa función constructora heredan ese método y pueden utilizarlo. Esto significa que cualquier instancia de Curry, puede ejecutar el método push.

var curryObj = new Curry(1, 2, 3);

curryObj es una instancia de Curry, y dado que has agregado el método push al prototipo de Curry (Curry.prototype.push), puedes ejecutar curryObj.push(4, 5, 6) en curryObj, y funcionará correctamente. El método push agregará los elementos 4, 5 y 6 al objeto curryObj, y actualizará la propiedad length en consecuencia.
Así que, puedes ejecutar el método push en curryObj y en cualquier otra instancia de Curry que crees.
*/