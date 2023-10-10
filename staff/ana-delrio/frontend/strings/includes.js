
function includes2(string, textToFind) {  // string: "un día vi una vaca vestida de uniforme" textToFind: "de uniforme"

    var numberOfCahrs = textToFind.length // creamos una variable con la longitud de la cadena a buscar (numberOfCahrs = 11)
    for (var i = 0; i < string.length; i++) { // iteramos sobre el string ("un día vi una vaca vestida de uniforme") 
        console.count('loop')
        var stringSplices = '' // stringSplices = 'un dia vi u'
        for (var k = 0; k < numberOfCahrs; k++) { // k = 11 , numberOfCahrs = 11
            console.count('loop')
            stringSplices += [i + k] // stringSplices = 'un dia vi u' ; string: "un día vi una vaca vestida de uniforme"
        }
        if (stringSplices === textToFind) return true
    }
    return false
}