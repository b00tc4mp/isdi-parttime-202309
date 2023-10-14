
function splice(array, start, removeCount, item) {
    // Comprobamos si removeCount es igual a 1, lo que significa que estamos realizando un reemplazo
    if (removeCount === 1) {
        // Almacenamos el elemento que se va a eliminar en 'elementToRemove'
        var elementToRemove = array[start]

        // Reemplazamos el elemento en la posición 'start' con el nuevo valor especificado 'item'
        array[start] = item

        // Devolvemos un array que contiene el elemento eliminado
        return [elementToRemove]

        // Si removeCount es igual a 0, significa que no eliminamos elementos del array
    } else if (removeCount === 0) {
        // Si hay 4 argumentos (incluyendo 'array', 'start', 'removeCount' e 'item'), estamos insertando un elemento
        if (arguments.length === 4) {
            // Utilizamos un bucle para desplazar todos los elementos hacia la derecha
            for (var i = array.length - 1; i >= start; i--) {
                // se utiliza para copiar el elemento actual del array en la posición i en una variable temporal llamada element. 
                // Este paso es importante en el contexto de la función splice porque estamos desplazando los elementos del array hacia la derecha para hacer espacio para el nuevo elemento que se va a insertar.
                var element = array[i]

                // En cada iteración del bucle, copiamos el elemento actual (element) en la posición i en la siguiente posición (i + 1) 
                // Esto desplaza todos los elementos hacia la derecha para hacer espacio para el nuevo elemento
                array[i + 1] = element
            }

            // Insertamos el nuevo elemento 'item' en la posición 'start'
            array[start] = item

            // Devolvemos un array vacío, ya que no eliminamos ningún elemento
            return []

            // Si hay más de 4 argumentos, estamos insertando múltiples elementos
        } else if (arguments.length > 4) {
            // esta línea de código se utiliza para calcular cuántos elementos adicionales se están insertando en el array 
            // cuando removeCount es igual a 0 y hay más de 4 argumentos proporcionados a la función
            var displacement = arguments.length - 3

            // Calculamos cuántos elementos adicionales se están insertando
            for (var i = array.length - 1; i >= start; i--) {
                var element = array[i]

                array[i + displacement] = element
            }

            // Insertamos el nuevo elemento 'item' en la posición 'start'.
            array[start] = item

            // Utilizamos un bucle para insertar los elementos adicionales en las posiciones correctas
            for (var i = 4; i < arguments.length; i++) {
                var element = arguments[i]

                array[start + i - 3] = element
            }

            // Devolvemos un array vacío, ya que no eliminamos ningún elemento
            return []
        }
    }
}