const fs = require('fs')

function parse(csv) { //Recibo el string en csv y lo covierto en objeto (data)
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

function loadAsObject(file, callback) {
    fs.readFile(file, 'utf8', (error, csv) => {
        if (error) {
            callback(error)

            return
        }

        const data = parse(csv)

        callback(null, data)
    })
}

function stringify(data) { //Recibo el objeto y lo devuelvo en string (csv)
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

function saveFromObject(file, data, callback) {
    const csv = stringify(data)

    fs.writeFile(file, csv, error => {
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}

module.exports = {
    parse,
    loadAsObject,
    stringify,
    saveFromObject
}
