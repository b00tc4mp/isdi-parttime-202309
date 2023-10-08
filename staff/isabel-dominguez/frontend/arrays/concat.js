function concat(...arrays) {

    const concatenatedArray = [];

    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            concatenatedArray.push(currentArray[j]);
        }
    }

    return concatenatedArray;
}

/*
- Cojo como parámetro los arrays
- Hago una variable que guarde los 2 arrays para retornarlos al final.
- Hago un for anidado, el primer for me recorre todos los arrays y me separará en otra variable los 2 que le he dicho en el argumento.
- En el segundo for me recorrerá los elementos que hay en los 2 arrays y me los pondrá en la variable concatenatedArray.
- Y por último me devuelve el array con todos los elementos que ha recorrido el segundo for.
*/