const fs = require('fs')

// LECTURA
function parseFromFile(file, callback) {
    // fs (fils system) module provided by Node.js
    // This module offers functions for working with the operating system's file system, enabling operations such as reading, writing, creating, and manipulating files and directories
    fs.readFile(file, 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }
        const data = JSON.parse(json)

        callback(null, data)
    })

}


// ESCRITURA
function stringifyToFile(file, data, callback) {

    // convertir a string un dato
    const json = JSON.stringify(data, null, 4)

    fs.writeFile(file, json, error => {
        if (error) {
            callback()

            return
        }

        callback(null)
    })
}


module.exports = {
    // interpretar un string y transformarlo en objeto
    parse: JSON.parse,
    parseFromFile,
    // interpretar un objeto y transformarlo en string
    stringify: JSON.stringify,
    stringifyToFile
}