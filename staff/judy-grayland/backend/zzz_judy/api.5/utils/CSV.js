// we turn the function into a reusable one to be applied to any csv file => parser

// parsing
const fs = require('fs')

// parsing means analyzing and interpreting or converting a programme into an internal format that a runtime environment, like node or the browser, can actually understand and run. The browser, for example, parses HTML into a DOM tree and CSS styles into the CSS Object Model, a data structure it then uses for styling layouts. JS is parsed during compile time or when the parse is invoked.
// compile time is the time from when the programme is first loaded until the programme is parsed.

// with the parse function we receive data as a string and then convert it to an object(which is an array)
function parse(csv) {
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
  return data
}

// guardar de disco a memoria: lee del disco, te trae el csv en forma de string y lo convierte a data
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

// with stringify we receive data as an array and then convert it to a string
function stringify(data) {
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

  return csv
}

// We use the following method to create a csv (string) from an array and save it
function stringifyToFile(file, data, callback) {
  const csv = stringify(data)
  // after compiling the csv we need to save it to the disk
  fs.writeFile(file, csv, (error) => {
    if (error) {
      callback(error)
    }

    callback(null)
  })
}

module.exports = {
  parse,
  parseFromFile,
  stringifyToFile,
  stringify,
}
