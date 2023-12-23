const fs = require('fs')

function loadAsObject(file, callback) {
    fs.readFile(file, 'utf8', (error, csv) => {
        if (error) {
            callback(error)
            return
        }

        const data = []

        const dataLines = csv.split('\r\n')
        const dataFields = dataLines[0].split(',')

        for (let i = 1; i < dataLines.length; i++) {
            const dataValues = dataLines[i].split(',')
            const dataItem = {}

            for (let j = 0; j < dataFields.length; j++) {
                dataItem[dataFields[j]] = dataValues[j]
            }
            data.push(dataItem)

        }
        callback(null, data)
    })
    console.log('Data imported')
}

function saveFromObject(file, data, callback) {

    const dataFields = Object.keys(data[0])

    let csv = dataFields.join()

    for (const dataItem of data) {
        let line = ''
        for (let i = 0; i < dataFields.length; i++) {
            const dataField = dataFields[i]

            line += dataItem[dataField] + (i < dataFields.length - 1 ? ',' : '')
        }


        csv += '\r\n' + line

    }

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
    saveFromObject
}
