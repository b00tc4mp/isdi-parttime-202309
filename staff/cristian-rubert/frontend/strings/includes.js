function includes(string, word) {
    for (var i = 0; i < string.length; i++) {
        if (word === string[i])
            return true
    }
    
    return false
}