// El método pop elimina el último elemento de un array y lo devuelve
// Este método cambia la longitud del array
// el pop devuelve EL elemento 


function pop(array) {
    if (array.length === 0) {
        return
    }
    var lastElement = array[array.length - 1]
    // estamos calculando el índice del último elemento en el array y luego tomamos este elemento, 
    // lo almacenmos en la variable lastElement
    // Como resultado, lastElement contendrá el valor del último elemento del array
    array.length--
    // reducimos la longitud del array en 1 para eliminar el último elemento 
    // array.length-- es una operación que disminuye la longitud del array en 1. Esto se hace restando 1 al valor de array.length.
    return lastElement
}

