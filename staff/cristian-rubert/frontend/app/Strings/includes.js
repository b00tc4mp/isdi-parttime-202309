function includes(string, ascertai) {

if (ascertai.length === 1) {
for (var i = 0; i < string.length; i++ ) {
    if (string[i] === ascertai) {
        return true
    }
}
 return false

} else if (ascertai.length === 2) {

    var charOne = ascertai[0]
    var charTwo = ascertai[1]

    for (var i = 0; i < string.length; i++)
        if (string[i] === charOne) {
            if (string [i+1] === charTwo) {
                return true
            }
        return false
        }
    } 
// my way
    else if (ascertai.length === 3) {}

    var charOne = ascertai[0]
    var charTwo = ascertai[1]
    var charTwo = ascertai[2]

    for (var i = 0; i < string.length; i++)
        if (string[i] === charOne && charTwo ) {
            if (string [i+2] === charTwo) {
                return true
            }
        return false
        }

}
    