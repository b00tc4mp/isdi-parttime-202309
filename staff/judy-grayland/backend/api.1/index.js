const fs = require('fs')

// fs.writeFile('./holamundo.txt', 'hola mundo', (error) => {
//   if (error) {
//     console.error(error)

//     return
//   }

//   console.log('saved')
// })

// console.log('continue...')

fs.readFile('./users.csv', 'utf8', (error, content) => {
  if (error) {
    console.error(error)

    return
  }

  const users = []

  // separates each line into a row
  const lines = content.split('\n')

  // sets the names of the columns in row 0
  const fields = lines[0].split(',')

  // we use a for loop to iterate over the users

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]

    const values = line.split(',')

    const user = {}

    //
    for (const j in fields) {
      const field = fields[j]

      user[field] = values[j]
    }

    users.push(user)
  }

  console.log(users)
})

console.log('continue...')
