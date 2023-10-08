function includes(string, textToFind) {
    for (let i = 0; i <= string.length - textToFind.length; i++) {
        var found = true;
        for (let j = 0; j < textToFind.length; j++) {
            if (string[i + j] !== textToFind[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}


/*


*/