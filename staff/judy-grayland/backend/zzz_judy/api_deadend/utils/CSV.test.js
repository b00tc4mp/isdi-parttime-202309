const CSV = require('./CSV')

// CSV.loadAsObject('./users.csv', (error, users) => {
//   if (error) {
//     console.error(error)

//     return
//   }

//   console.log(users)
// })

CSV.loadAsObject('./data/users.csv', (error, users) => {
  if (error) {
    console.error(error)

    return
  }

  CSV.saveFromObject('./data/users2.csv', users, (error) => {
    if (error) {
      console.error(error)

      return
    }
    console.log('end')
  })
})
