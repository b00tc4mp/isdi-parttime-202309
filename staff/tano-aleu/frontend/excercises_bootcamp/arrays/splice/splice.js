function splice(array, start, removeCount, item) {

    if (removeCount === 0) {
        // Desplaza los elementos hacia la derecha para abrir espacio para los nuevos elementos
        var displacement = arguments.length - 3;

        for (var i = array.length - 1; i >= start; i--) {
            var element = array[i];
            array[i + displacement] = element;
        }

        // Agrega el nuevo elemento en la posición inicial
        array[start] = item;

        // Agrega los elementos adicionales si los hay
        for (var i = 4; i < arguments.length; i++) {
            var element = arguments[i];
            array[start + i - 3] = element;
        }

        // Devuelve un array vacío (ningún elemento eliminado)
        return [];
    } else if (removeCount === 1 && arguments.length === 4) {
        // Reemplaza un elemento y devuelve el elemento eliminado
        var elementToRemove = array[start];
        array[start] = item;
        return [elementToRemove];
    } else if (removeCount >= 1) {
        // Elimina elementos y devuelve los elementos eliminados
        var removed = [];

        for (var i = start; i < array.length - 1; i++) {
            var elementToRemove = array[i];
            removed[removed.length] = elementToRemove;

            // Desplaza los elementos restantes hacia la izquierda
            var next = array[i + removeCount];
            array[i] = next;
        }

        // Ajusta la longitud del array después de la eliminación
        array.length -= removeCount;

        // Devuelve los elementos eliminados
        return removed;
    }
}


// Resumen de la función splice:

// Propósito: Modificar el contenido de un array al eliminar o reemplazar elementos existentes y/o agregar nuevos elementos.

// Implementación:

// Maneja diferentes casos según el valor de removeCount y la cantidad de argumentos proporcionados.
// Si removeCount === 0, desplaza elementos hacia la derecha, agrega nuevos elementos y devuelve un array vacío.
// Si removeCount === 1 y se proporciona un nuevo elemento, reemplaza el elemento en la posición start y devuelve un array que contiene el elemento eliminado.
// Si removeCount es mayor o igual a 1, elimina elementos desde la posición start, ajusta la longitud del array y devuelve un array con los elementos eliminados.



// Explicación paso a paso:

// 1. La función tiene diferentes casos según el valor de removeCount y la cantidad de argumentos proporcionados.

// 2. En el caso de removeCount === 0, desplaza los elementos hacia la derecha para abrir espacio, agrega el nuevo elemento en la posición inicial y devuelve un array vacío.

// 3. Si removeCount === 1 y se proporciona un nuevo elemento, reemplaza el elemento en la posición start y devuelve un array que contiene el elemento eliminado.

// 4. Si removeCount es mayor o igual a 1, elimina los elementos a partir de la posición start, ajusta la longitud del array y devuelve un array con los elementos eliminados.
