// queremos que nos convierta el CSV en un JSON. JSON por si solo no te permite guardar un fichero, pero vamos a darle super poderes a JSON con el stringifyToFile para que lo pueda guardar:
const CSV = require('../utils/CSV')
const JSON = require('../utils/JSON')

CSV.parseFromFile('./data/users.csv', (error, users) => {
  if (error) {
    console.error(error)

    return
  }
  JSON.stringifyToFile('./data/users.json', users, (error) => {
    if (error) {
      console.error(error)

      return
    }

    console.log('converted')
  })
})

// JSON es un string
