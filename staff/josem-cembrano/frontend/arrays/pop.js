var pop = function (array) {
    var withoutTheLast = []
    for (var i = 0; i < array.length - 1; i++) {
        withoutTheLast[i] = array[i]/* withoutTheLast[i], almacena lo que vale array[i] en ese momento, de esta manera almacenara 
                                       siempre los valores en withoutTheLast, en el mismo orden en el que hemos estado iterando */
    }
    return withoutTheLast
}