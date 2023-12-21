Curry.prototype.slice = function (start, end) {
    if (arguments.length === 0)
        start = 0

    if (start === null || start === undefined || start === false || typeof start === 'string')
        start = 0

    if (start === true)
        start = 1

    if (end === null || end === undefined || end === false || typeof end === 'string')
        end = 0

    if (end === true)
        end = 1

    if (!Number.isInteger(arguments[0]))
        if (start > 0) {
            start = '' + start + ''
            start = start[0]
        } else if (start < 0) {
            start = '' + start + ''
            start = start[0] + start[1]
        }
    start = Number(start)

    if (!Number.isInteger(arguments[1]))
        if (end > 0) {
            end = '' + end + ''
            end = end[0]
        } else if (start < 0) {
            end = '' + end + ''
            end = end[0] + end[1]
        }
    end = Number(end)

    if (arguments.length > 2)
        arguments.length = 2

    if (arguments.length === 1) {
        if (start < 0)
            start = start + c.length

        slicedArray = []
        for (var i = start; i < c.length; i++) {
            slicedArray[slicedArray.length] = c[i]
        }
        return slicedArray
    } else if (arguments.length === 2 || arguments.length === 0) {
        if (start < 0)
            start = start + c.length

        if (end < 0)
            end = end + c.length

        if (start === 0)
            end = c.length

        slicedArray = []
        for (var i = start; i < end; i++) {
            slicedArray[slicedArray.length] = c[i]
        }
        return slicedArray
    }
}