// el método concat se utiliza para combinar dos o más arrays en uno nuevo 
// no afecta a los arrays existentes, sino que crea un nuevo array 


// Definición de la función sumaTodos sin parámetros explicitos, lo que significa qeu puede aceptar cualquier tipo de argumento
function sumaTodos() {
    // Inicializa una variable, esta se utilizara para llevar el registro de todods los argumentos
    var total = 0

    // Itera a través de los argumentos utilizando el objeto 'arguments'
    // El objeto arguments es un objeto especial que contiene todos los argumentos pasados a la función, sin importar cuántos haya
    // arguments.length nos da la cantidad de argumentos que se pasaron
    // arguments[i] nos da el valor del argumento en la posición i
    for (var i = 0; i < arguments.length; i++) {

        // En cada iteración del bucle, sumamos el valor del argumento actual (arguments[i]) al valor actual de total. Esto acumula la suma de todos los argumentos
        total += arguments[i]

    }

    // Retorna el valor total después de sumar todos los argumentos
    return total
}

// Llamada a la función sumaTodos con varios argumentos
var resultado4 = sumaTodos(1, 2, 3, 4)
// Por lo tanto, después de llamar a la función sumaTodos(1, 2, 3, 4), la variable resultado4 contendrá el valor 10, que es la suma de todos los argumentos pasados a la función
