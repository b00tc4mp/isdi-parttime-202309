// con esta hacemos que se paralice toda la página

function syncDelay(callback, seconds) {
    // Almacenamos el tiempo actual en milisegundos en la variable 'before'
    const before = Date.now()

    // Bucle que se ejecuta mientras la diferencia entre el tiempo actual y 'before' sea menor que la duración especificada en segundos
    while (Date.now() - before < seconds * 1000)

        // Llama a la función de devolución (callback) después de que el bucle ha terminado y ha pasado el tiempo especificado
        callback()
}



// Definición de una función de devolución (callback)
function miCallback() {
    console.log("¡La espera ha terminado!")
}

// Llamada a la función syncDelay, pasando miCallback como callback y especificando 3 segundos de espera
syncDelay(miCallback, 3)
