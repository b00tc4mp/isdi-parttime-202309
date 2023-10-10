function push(array, ...elements) {
    for (var i = 0; i < elements.length; i++) {
        array[array.length] = elements[i];
    }
    return array.length;
}





/*
- Cojo como parámetro el array y todos los elementos que voy a añadir.
- Recorro con un for los elementos y los meto en el array
- Por último, devuelvo la longitud
*/
