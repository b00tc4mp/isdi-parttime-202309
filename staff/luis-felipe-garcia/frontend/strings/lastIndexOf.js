function lastIndexOf (string, chart) {
    for (var i=string.length-1; i>=0 ; i--)
    if (string[i] === chart) {
        return i
    }
    return '-1'

}