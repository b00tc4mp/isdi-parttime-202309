// push es un método que se utiliza para agregar uno o más elementos al final de un array
// y devuelve la nueva longitud del array



function push(array, newElement) {
    array[array.length] = newElement
    //Se agrega el nuevo elemento "newElement" al final del array "array"
    return array
}