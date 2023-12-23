
function splice(array, start, removeCount, item) {
    // Almacenamos el elemento que se va a eliminar en 'elementToRemove'
    var elementToRemove = array[start]

    // Reemplazamos el elemento en la posición 'start' con el nuevo valor especificado
    array[start] = item

    return [elementToRemove]
}  