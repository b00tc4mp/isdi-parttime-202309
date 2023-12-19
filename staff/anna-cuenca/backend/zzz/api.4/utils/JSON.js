
const fs = require('fs')


// es un paquete pre-fabricado de node, que significa File System
// es una caja de herramientas que tiene entre otras cosas readFile, que te permite leer el archivo que tú le digas
// tiene que estar en la carpeta dnd ejecutamos el node



function parseFromFile(file, callback) {
    fs.readFile(file, 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const data = JSON.parse(json)




        callback(null, data)
    })
}


function stringifyToFile(file, data, callback) { // en este fichero, guárdame este objeto

    const json = JSON.stringify(data, null, 4) //se pone null y 4 para darle un formato bonito, no en forma de única línea 

    fs.writeFile(file, json, error => {
        if (error) {
            callback(error) // esto es así porque solo tengo un dato (el error) que le paso al callback
            // si tiene error que me lo devuelva, sino que sea null

            return
        }

        callback(null)
    })
}

module.exports = {
    parse: JSON.parse,
    parseFromFile,
    stringify: JSON.stringify,
    stringifyToFile
}