// we turn the function into a reusable one to be applied to any csv file => parser

const fs = require('fs')

function loadAsObject(file, callback) {
  fs.readFile(file, 'utf8', (error, csv) => {
    if (error) {
      callback(error)

      return
    }

    const data = []

    // separates each line into a row
    const lines = csv.split('\n')

    // sets the names of the columns in row 0
    const fields = lines[0].split(',')

    // we use a for loop to iterate over the users

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]

      const values = line.split(',')

      const item = {}

      //
      for (const j in fields) {
        const field = fields[j]

        item[field] = values[j]
      }

      data.push(item)
    }

    callback(null, data)
  })
}

// We use the following method to create a csv from an array
function saveFromObject(file, data, callback) {
  // first we get an array of property names (ie. the fields) using the Object.keys method
  const fields = Object.keys(data[0])

  // then we use the join method to turn the array items into a string separated by commas
  let csv = fields.join()

  for (const item of data) {
    let line = ''

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i]

      // le ponemos el ternario para decirle que añada una coma desepués del ítem, siempre y cuando no sea el último elemento del array
      line += item[field] + (i < fields.length - 1 ? ',' : '')
    }

    csv += '\n' + line
  }

  // after compiling the csv we need to save it to the disk
  fs.writeFile(file, csv, (error) => {
    if (error) {
      callback(error)
    }

    callback(null)
  })
}

module.exports = {
  loadAsObject,
  saveFromObject,
}
