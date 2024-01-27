function pop(array) {
    // Verifica si el array está vacío
    if (!array.length) return;

    // Obtiene el último elemento del array
    var last = array[array.length - 1];

    // Elimina el último elemento del array
    delete array[--array.length];

    // Devuelve el último elemento que fue eliminado
    return last;
}


// Resumen de la función pop:

// Propósito: Extraer y devolver el último elemento de un array, modificando el array original para eliminar ese elemento.

// Implementación:

// Verifica si el array no está vacío (!array.length). Si está vacío, no realiza ninguna acción y sale de la función.
// Obtiene el último elemento del array (array[array.length - 1]).
// Elimina el último elemento utilizando el operador delete.
// Devuelve el elemento extraído.


// 1. Verificación de la longitud del array:

// if (!array.length) return;
// Esta línea verifica si el array está vacío. Si es así, la función simplemente retorna sin hacer nada.


// 2. Obtención del último elemento:

// var last = array[array.length - 1];
// Aquí, se accede al último elemento del array utilizando la propiedad length del array. La variable last ahora contiene el valor del último elemento.


// 3. Eliminación del último elemento:

// delete array[--array.length];
// Esta línea elimina el último elemento del array. --array.length decrementa la longitud del array antes de acceder al índice para eliminar el último elemento.


// 4.  Retorno del último elemento eliminado:

// return last;

// Finalmente, la función devuelve el valor del último elemento que fue eliminado del array.
// Es importante destacar que esta implementación utiliza delete para eliminar el elemento del array. Sin embargo, esto no ajusta la longitud del array de manera efectiva. Es posible que desees considerar utilizar el método pop() estándar de JavaScript para lograr esto de una manera más limpia y eficiente:








