function forEach(array, callback){
    for ( var i = 0; i<array.lenght; i++){
        var v= array[i]

        callback(v)
    }
}
