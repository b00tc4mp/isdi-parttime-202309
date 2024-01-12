// aquí utilizamos el JSON original para el parseo y para stringify. Al final nos exporta estas dos funciones y dos más (parsefromfile y stringifytofile )
const fs = require('fs')

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

function stringifyToFile(file, data, callback) {
  const json = JSON.stringify(data, null, 4)
  // after compiling the csv we need to save it to the disk
  fs.writeFile(file, json, (error) => {
    if (error) {
      callback(error)
    }

    callback(null)
  })
}

module.exports = {
  parse: JSON.parse,
  parseFromFile,
  stringify: JSON.stringify,
  stringifyToFile,
}
