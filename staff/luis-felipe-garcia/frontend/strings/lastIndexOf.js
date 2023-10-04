function lastIndexOf (string, chart) {
    for (var i=string.length; i>=0 ; i--)
    if (string[i] === chart) {
        return i
    }
    return '-1'

}