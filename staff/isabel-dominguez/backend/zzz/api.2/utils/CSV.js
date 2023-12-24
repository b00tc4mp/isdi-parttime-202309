const fs = require('fs')

function loadAsObject(file, callback) {
    fs.readFile(file, 'utf8', (error, csv) => { // Lee el contenido del archivo CSV
        if (error) {
            callback(error)

            return
        }

        const data = [] // Inicializa un array para almacenar los objetos del CSV

        const lines = csv.split('\r\n') // Divide el CSV en líneas

        const fields = lines[0].split(',') // Obtiene los nombres de los campos desde la primera línea

        for (let i = 1; i < lines.length; i++) { // Itera sobre las líneas del CSV (a partir de la segunda)
            const line = lines[i]

            const values = line.split(',') // Divide la línea en valores

            const item = {} // Inicializa un objeto para almacenar los valores de la línea

            // Asigna cada valor a su campo correspondiente
            for (const j in fields) { // in te saca índices
                const field = fields[j]

                item[field] = values[j]
            }

            data.push(item) // Agrega el objeto al array de datos
        }

        callback(null, data) // Llama a la función de devolución de llamada con los datos procesados
    })
}

function saveFromObject(file, data, callback) {
    const fields = Object.keys(data[0]) // Obtiene los nombres de los campos del primer objeto en el array de datos

    let csv = fields.join() // Crea la primera línea del CSV con los nombres de los campos separados por comas "fields = {"name", "email", "password"}" csv = "name,email,password"

    for (const item of data) { // Itera sobre cada objeto en el array de DATA, el of te saca valores
        let line = ''

        for (let i = 0; i < fields.length; i++) { // Itera sobre los campos del objeto actual
            const field = fields[i]

            line += item[field] + (i < fields.length - 1 ? ',' : '') // Concatena el valor del campo al string de la línea
        }

        csv += '\r\n' + line // Agrega la línea al string CSV, con un salto de línea antes de cada nueva línea
    }

    fs.writeFile(file, csv, error => { // Escribe el contenido del CSV en el archivo especificado
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}

module.exports = {
    loadAsObject,
    saveFromObject
}