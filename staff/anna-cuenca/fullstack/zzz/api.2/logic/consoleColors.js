function printInRed(text) {
    console.log('\x1b[31m%s\x1b[0m', text)
}

function printInGreen(text, object) {
    console.log('\x1b[32m%s\x1b[0m', text, object)
}



module.exports = {
    printInRed,
    printInGreen
}