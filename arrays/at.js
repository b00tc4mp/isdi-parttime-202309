function at(array, index) {
    for(var i = 0; i < array.length; i++) {
        if (i === index) {
            return array[i]
        }
        else {
            for (let i = array.length -1 ; i >= 0; i--) {
                if (array[i] === index) {
                    return array[i]
                }
            }
        }
    }
}

// buscando la posicion para que nos muestre el numero que contiene

// tambien se puede mostrar la posicion simplemente cambiando el return [i] "en ambos return"

// for lo he intentado y como ya en la primera ronda valia +1 ya no podia ver la posicion 0 por eso he creado un else con un for en contra direccion