// el método concat se utiliza para combinar dos o más arrays en uno nuevo 
// no afecta a los arrays existentes, sino que crea un nuevo array 


// El uso de los tres puntos (...) antes del nombre del parámetro "arrays" indica que esta función puede recibir múltiples argumentos y los agrupa en un array
function concat(...arrays) {

    // array vacío para almacenar los elementos que vamos a concatenar
    const concatenatedArray = []


    for (let i = 0; i < arrays.length; i++) {
        // En cada iteración del bucle, se extrae el array actual y se almacena en una variable llamada currentArray
        // Esto permite que la función acceda a los elementos de cada array uno por uno y los concatene en el nuevo array (concatenatedArray)
        const currentArray = arrays[i]

        // Este es otro bucle for, pero esta vez se utiliza para iterar a través de los elementos del array actual (currentArray) 
        for (let j = 0; j < currentArray.length; j++) {
            //Dentro de este bucle, se utiliza el método push para agregar el elemento actual de currentArray al array concatenado (concatenatedArray). currentArray[j] 
            // accede al elemento en la posición j del currentArray, y ese elemento se agrega al concatenatedArray.
            concatenatedArray.push(currentArray[j])
        }
    }

    return concatenatedArray
}
