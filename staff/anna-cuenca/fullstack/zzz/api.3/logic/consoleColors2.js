
// Secuencia ANSI para verde
const green = '\x1b[32m'
// Secuencia ANSI para amarillo
const yellow = '\x1b[33m'
// Secuencia ANSI para rojo
const red = '\x1b[31m'
// Secuencia ANSI para resetear el color
const reset = '\x1b[0m'
const redBack = '\x1b[43m'




function printInRed(text) {
    console.log(`${red}%s${reset}`, text)
}


function printInGreen(text, object) {
    //console.log(`${green}%s %s${reset}`, text, object)
    console.log(`${green}${redBack}%s${reset} ${yellow}%s ${reset}`, text, object)
}



module.exports = {
    printInRed,
    printInGreen
}


