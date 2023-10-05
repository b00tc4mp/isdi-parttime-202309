function indexOf(string, searchString) {
    for (var i = 0; i < string.length; i++) {

        if(searchString === string[i]) {
            return i
        } 

    }

    return '-1'
}