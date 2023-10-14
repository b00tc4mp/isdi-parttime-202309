

function splice(array, start, removeCount, item) {
    // Si 'removeCount' es igual a 1, significa que estamos realizando una operación de reemplazo en el array
    if (removeCount === 1) {
        // Cuando estamos reemplazando un elemento, almacenamos el elemento que se encuentra en la posición especificada 
        // start del array original en la variable elementToRemove
        // Esto es importante para que podamos devolverlo más adelante en el array de elementos eliminados
        var elementToRemove = array[start]

        // Reemplazamos el elemento en la posición 'start' con el nuevo valor específico de 'item'
        array[start] = item

        // Devolvemos un array que contiene el elemento eliminado
        return [elementToRemove]

        /// Si 'removeCount' es igual a 0, significa que no eliminamos elementos, solo insertamos uno
        // Movemos todos los elementos a la derecha para hacer espacio para el nuevo elemento
    } else if (removeCount === 0) {
        // El bucle for que sigue se utiliza para desplazar todos los elementos en el array hacia la derecha para hacer espacio para el nuevo elemento
        for (var i = array.length - 1; i >= start; i--) {
            var element = array[i]

            // copiamos el elemento almacenado en element a la siguiente posición en el array (i + 1). 
            // Este paso es esencial para hacer espacio para el nuevo elemento que se va a insertar
            array[i + 1] = element
        }
        // una vez que hemos hecho espacio en el array, insertamos el nuevo elemento item en la posición start
        array[start] = item

        // Devolvemos un array vacío, ya que no eliminamos ningún elemento
        return []
    }
}