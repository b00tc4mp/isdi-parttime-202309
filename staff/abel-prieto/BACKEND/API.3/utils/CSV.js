const fs = require('fs')
const { stringify } = require('querystring')
// Ponemos el require() porque es la importación

function parse(csv) {
    const data = []
    
    const lines = csv.split('\r\n')

    const fields = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        const values = line.split(',')

        const item = {}

        for (let j in fields) {
            const field = fields[j]

            item[field] = values[j]
        }

        data.push(item)
    }

    return data
    // Mediante parse() recibimos el CSV en forma de string y lo convertimos en un Objeto (un Array)
}

function loadAsObject(file, callback) {
    fs.readFile(file, "utf8", (error, csv) => {
        if (error) {
            callback(error)
    
            return
        }
    
        const data = parse(csv)
        // Con la función parse() hacemos que interprete el CSV para que nos devuelva los datos
    
        callback(null, data)
    })
}

function sstringify(data) {
    const fields = Object.keys(data[0])

    let csv = fields.join() 

    for (const item of data) {
        let line = ''

        for (let i = 0; i < fields.length; i++) {
            const field = fields[i]
            
            line += item[field] + (i < fields.length - 1 ? ',' : '')
        }

        csv += '\r\n' + line
    }

    return csv
    // Mediante el stringify() hacemos que se reciba un dato en forma de Objeto (Array) y lo transforme en un string
}

function saveFromObject(file, data, callback) {
    const csv = sstringify(data)

    fs.writeFile(file, csv, error => {
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}

module.exports = {
    loadAsObject,
    saveFromObject,
    parse,
    sstringify
}

// Ponemos el module.exports = {} para exportar las funciones