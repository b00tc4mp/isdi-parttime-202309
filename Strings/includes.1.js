function includes(string, ascertai) {
    for(let i = 0; i < string.length; i++) {
        if (string[i] === ascertai) {
            return true
        }
    }
    return false
}
