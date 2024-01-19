const fs = require('fs')


// parsear significa convertir un texto
// aquí recibe el CSV(string) y lo convierte en objeto (array)
function parse(csv) {
    const data = []

    const lines = csv.split('\r\n')

    const fields = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        const values = line.split(',')

        const item = {}

        for (const j in fields) {

            const field = fields[j]

            item[field] = values[j]

        }
        data.push(item)

    }

    return data
}

// LECTURA
function parseFromFile(file, callback) {
    fs.readFile(file, 'utf8', (error, csv) => {
        if (error) {
            callback(error)

            return
        }
        const data = parse(csv)

        callback(null, data)
    })

}

// aquí convierto el objeto/array a CSV
function stringify(data) {
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

}

// ESCRITURA
function stringifyToFile(file, data, callback) {

    // convertir a string un dato
    const csv = stringify(data)

    fs.writeFile(file, csv, error => {
        if (error) {
            callback()

            return
        }

        callback(null)
    })
}


module.exports = {
    // interpretar un string y transformarlo en objeto
    parse,
    // interpretar un objeto y transformarlo en string
    stringify,
    parseFromFile,
    stringifyToFile
}