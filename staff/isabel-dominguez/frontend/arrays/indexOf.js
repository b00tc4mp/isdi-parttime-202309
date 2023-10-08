function indexOf(array, searchString) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchString) {
            return i;
        }
    }
    return -1;
}

/*
- Cojo como parámetros array y el string a buscar.
- Hago un for que me recorra el array y si me encuntra el string me lo retorne y si no encuentra nada me retorne -1.
*/