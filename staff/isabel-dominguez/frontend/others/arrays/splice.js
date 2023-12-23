function splice(array, start, removeCount, item) {
    if (removeCount === 0) {
        // Caso 1: No se eliminan elementos, solo se inserta 'item'
        var displacement = arguments.length - 3

        // Desplaza elementos hacia la derecha para hacer espacio para 'item'
        for (var i = array.length - 1; i >= start; i--) {
            var element = array[i]

            array[i + displacement] = element
        }

        // Insertar 'item' en la posición 'start'
        array[start] = item

        // Insertar argumentos adicionales, si los hay
        for (var i = 4; i < arguments.length; i++) {
            var element = arguments[i]

            array[start + i - 3] = element
        }
        // Devolve un array vacío
        return []
    } else if (removeCount === 1 && arguments.length === 4) {
        // Caso 2: Se elimina un elemento y se inserta 'item'
        var elementToRemove = array[start]

        array[start] = item

        // Devolve un array que contiene el elemento eliminado
        return [elementToRemove]
    } else if (removeCount >= 1) {
        // Caso 3: Se eliminan múltiples elementos
        var removed = []

        for (var i = start; i < array.length - 1; i++) {
            var elementToRemove = array[i]

            removed[removed.length] = elementToRemove

            var next = array[i + removeCount]

            array[i] = next
        }

        // Reduce la longitud del array en 'removeCount'
        array.length -= removeCount
        // Devolve un array que contiene los elementos eliminados
        return removed
    }
}


/*  La esta función SPLICE permite modificar un array al eliminar elementos y/o insertar nuevos elementos en una posición específica. 

    PARÁMETROS DE LA FUNCIÓN:
    array: El array en el cual se realizarán las modificaciones.
    start: La posición en el array donde se desea realizar la modificación.
    removeCount: El número de elementos que se eliminarán del array a partir de la posición start.
    item: El elemento que se va a insertar en la posición start.

- Caso 1: No se eliminan elementos, solo se inserta 'item'

En este caso, se verifica que removeCount sea igual a 0, lo que significa que no se eliminarán elementos.
Se calcula displacement, que representa cuántos elementos se están insertando además de item.
Se inicia un bucle for que recorre el array desde el final hasta la posición start, desplazando los elementos a la derecha para hacer espacio para item.
Luego, se inserta item en la posición start.
Si hay argumentos adicionales después de item, se insertan en posiciones sucesivas a partir de start.
Finalmente, la función devuelve un array vacío.

- Caso 2: Se elimina un elemento y se inserta 'item'

En este caso, se verifica que removeCount sea igual a 1 y que haya un argumento adicional (además de array, start, removeCount, e item).
Se almacena el elemento que se va a eliminar en elementToRemove.
Luego, se inserta item en la posición start.
La función devuelve un array que contiene el elemento eliminado.

-Caso 3: Se eliminan múltiples elementos

En este caso, removeCount es mayor o igual a 1.
Se inicializa un array llamado removed para almacenar los elementos eliminados.
Se utiliza un bucle for que comienza en la posición start y recorre el array. Durante cada iteración, se eliminan elementos removeCount y se almacenan en removed. El bucle desplaza los elementos restantes para llenar los vacíos dejados por los elementos eliminados.
Al final del bucle, la longitud del array se reduce en removeCount para reflejar los elementos eliminados.
La función devuelve el array removed que contiene los elementos eliminados. */