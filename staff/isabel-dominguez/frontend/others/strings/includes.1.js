function includes(string, textToFind) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === textToFind)
            return true
    }
    return false
}