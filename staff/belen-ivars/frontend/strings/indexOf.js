function indexOf(string, searchString) {
    for (var index in string) {
        if (string[index] === searchString) {
            return index
        }
    }
    return -1
}

/*var index= 0; index < string.length; index++) {
    var character = string[index] */

/* var character = string[index]
 if (character === searchString) */