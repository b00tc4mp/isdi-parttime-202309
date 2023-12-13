const fs = require('fs')
// Ponemos el require() porque es la importación

function parseFromFile(file, callback) {
    fs.readFile(file, "utf8", (error, json) => {
        if (error) {
            callback(error)
    
            return
        }
    
        const data = JSON.parse(json)
        // Con la función parse() hacemos que interprete el CSV para que nos devuelva los datos
    
        callback(null, data)
    })
}

function stringifyToFile(file, data, callback) {
    const json = JSON.stringify(data, null, 4)

    fs.writeFile(file, json, error => {
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}

module.exports = {
    parseFromFile,
    stringifyToFile,
    parse : JSON.parse,
    stringify: JSON.stringify
}

// Ponemos el module.exports = {} para exportar las funciones