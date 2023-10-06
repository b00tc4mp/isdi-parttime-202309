function at(array, index) {
    if (index < 0) {
        index = index + 5;
    }

    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        return undefined;
    }
}


/*
- Cojo como parámetro el array y el índice
- Hago dos if, uno si el valor es negativo y otro si es positivo
- Si es negativo lo paso a positivo haciendo que coincida con el índice. Si a mi número negativo le sumo su "longitud" obtendré el indice correspondiente al empezar de 0 en un array. Teniendo en cuenta que el numero -1 es el primer elemento empezando por el final.
- Si el indice que pongo es positivo, simplemente imprimo el valor que se encuentre en ese indice.
- Pongo límite desde 0 a la longitud del array.
- Si pongo un número fuera de la longitud del array devuelvo undefined.
*/
