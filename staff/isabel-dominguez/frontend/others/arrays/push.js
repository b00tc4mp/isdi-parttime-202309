function push(array) {
    for (var i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i];
    }
    return array.length;
}

/*
- Cojo como parámetro el array y todos los elementos que voy a añadir.
- Recorro con un for los elementos y los meto en el array
- Por último, devuelvo la longitud
*/
