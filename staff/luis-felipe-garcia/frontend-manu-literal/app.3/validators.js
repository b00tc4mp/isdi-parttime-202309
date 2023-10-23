function validateText(text, explain){
    if (typeof text !== 'string') throw new TypeError(explain +' is not string')
    if (!text.trim().length) throw new Error(explain + ' is empty')
   /* if (itemToCheck !== checkedItem) {
        throw new Error(`${textToMessage} do not match`)
    }*/
}
/*
var checkCoincidence = function (itemTocheck, checkedItem) {
    if (itemTocheck === checkedItem) {
        return true
    }
    return false
}*/