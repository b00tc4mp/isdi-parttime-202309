// el método concat se utiliza para combinar dos o más arrays en uno nuevo 
// no afecta a los arrays existentes, sino que crea un nuevo array 

function concat(array1, array2) {
    var newArray = []

    for (var i = 0; i < array1.length; i++) {
        newArray[newArray.length] = array1[i]
        //En cada iteración del bucle, se toma el elemento en la posición i del array1
        //y se agrega al final del nuevo array newArray. La expresión newArray.length se utiliza para determinar la posición en la que se añadirá el nuevo elemento, 
        // ya que la propiedad length de un array devuelve la cantidad de elementos y, por lo tanto, se usa como el índice para la próxima posición disponible
    }

    for (var i = 0; i < array2.length; i++) {
        newArray[newArray.length] = array2[i]
    }

    return newArray
}




