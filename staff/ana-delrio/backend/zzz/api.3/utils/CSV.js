const fs = require('fs')

// LECTURA
function loadAsObject(file, callback) {
    fs.readFile(file, 'utf8', (error, csv) => {
        if (error) {
            callback(error)

            return
        }
        const data = []

        // esto nos sirve para separar los strings (cada línea) con los saltos de linea (\n)
        const lines = csv.split('\r\n')

        // la primera línea, que son los fields, que nos lo separe con comas (',')
        const fields = lines[0].split(',')

        // empezamos con la línea 1 que es la que nos interesa
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i]

            // separo los valores con comas
            const values = line.split(',')

            const item = {}

            for (const j in fields) {
                // campos: me traigo la primera posición de fields fields[j], que es "i" de id, y se lo inserto en el array de field
                const field = fields[j]

                // y la primera posición de los values, y se inserta en el objeto de item
                item[field] = values[j]

            }
            data.push(item)

        }

        callback(null, data)
    })

}

// ESCRITURA
function saveFromObject(file, data, callback) {
    // lo primero que hacemos es leer los keys, a través de object.keys
    const fields = Object.keys(data[0])

    // estos campos los quiero unir en uno, separados por comas
    let csv = fields.join()

    // 
    // Iteramos cada objeto del array "data"
    for (const item of data) {
        let line = ''

        for (let i = 0; i < fields.length; i++) {
            const field = fields[i]

            // nos aseguramos que el ultimo elemento no tenga coma 
            line += item[field] + (i < fields.length - 1 ? ',' : '')
        }

        // agregamos la fila construida al archivo csv
        csv += '\r\n' + line
    }

    fs.writeFile(file, csv, error => {
        if (error) {
            callback()

            return
        }

        callback(null)
    })
}


module.exports = {
    loadAsObject,
    saveFromObject
}