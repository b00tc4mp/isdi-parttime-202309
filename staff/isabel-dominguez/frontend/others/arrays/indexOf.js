function indexOf(array, searchElement) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

/*
- Cojo como parámetros array y el string a buscar.
- Hago un for que me recorra el array y si me encuntra el string me lo retorne y si no encuentra nada me retorne -1.
*/