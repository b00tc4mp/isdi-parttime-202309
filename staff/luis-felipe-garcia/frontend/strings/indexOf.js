function indexOf(string, chart) {
    for (var i = 0; i < string.length; i++)
        if (string[i] === chart) {
            return i
        }
    return '-1'

}