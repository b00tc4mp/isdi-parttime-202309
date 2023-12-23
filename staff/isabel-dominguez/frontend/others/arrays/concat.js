function concat() {

    const concatenatedArray = [];

    for (let i = 0; i < arguments.length; i++) {
        const currentArray = arguments[i];
        for (let j = 0; j < currentArray.length; j++) {
            concatenatedArray[concatenatedArray.length] = currentArray[j]
        }
    }

    return concatenatedArray;
}

/*
- Hago una variable que guarde los 2 arrays para retornarlos al final.
- Hago un for anidado, el primer for me recorre todos los arrays y me separará en otra variable los 2 que le he dicho en el argumento.
- En el segundo for me recorrerá los elementos que hay en los 2 arrays y me los pondrá en la variable concatenatedArray.
- Y por último me devuelve el array con todos los elementos que ha recorrido el segundo for.
*/

function concatProfe() {
    var newArray = []

    for (var i = 0; i < arguments.length; i++) {
        newArray[newArray.length] = arguments[i]
    }

    return newArray
}