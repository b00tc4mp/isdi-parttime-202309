function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var index = array[i]

        if(callback(index))
            return index
    }
}