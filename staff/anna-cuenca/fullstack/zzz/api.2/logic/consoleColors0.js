function printInRed(text) {
    console.log('\x1b[31m%s\x1b[0m', text)
}


function printInGreen(text) {
    console.log('\x1b[32m%s\x1b[0m', text)
}


module.exports = {
    printInRed,
    printInGreen
}


