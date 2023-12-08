function slice(array, start, end) {
    if (!start || start < -array.length) start = 0
    else if (start < 0) start = array.length + start

    if (!end || end > array.length) end = array.length
    else if (end < 0) end = array.length + end
    else if (end < -array.length) end = 0
    
    if (start > end || start > array.length) return []

    output = []

    for (var i = start; i < end; i++) {
        output[output.length] = array[i]
    }
    return output  
}