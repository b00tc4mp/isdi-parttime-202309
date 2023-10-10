// El METODO indexOf se utiliza en arrays para encontrar la PRIMERA APARICIÓN de un elemento
// y devuelve su INDICE (posición) dentro
// Si el elemento no se encuentra en el array, devuelve -1 


function indexOf(array, searchTerm) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchTerm) {
            // Comprobación: Si el elemento actual del array es igual a 'searchTerm' 

            return i
        }
    }

    return -1
}

