// El METODO indexOf se utiliza en arrays para encontrar la PRIMERA APARICIÓN de un elemento
// y devuelve su INDICE (posición) dentro
// Si el elemento no se encuentra en el array, devuelve -1 

function indexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            // aquí estamos comparando si el elemento en la posición i del array array es igual (en valor y tipo)
            // a la cadena que estamos buscando. Si es cierto, significa que hemos encontrado una coincidencia, y la función indexOf devuelve el valor de i

            return i
        }
    }

    return -1
}

