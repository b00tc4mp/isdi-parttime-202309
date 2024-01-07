const fs = require('fs')

// fs.readFile('./helloworld.txt', 'utf8', (error, content) => {
//   if (error) {
//     console.error(error)

//     return
//   }

//   console.log(content)
// })

// console.log('continue...')

fs.writeFile('./holamundo.txt', 'hola mundo', (error) => {
  if (error) {
    console.error(error)

    return
  }

  console.log('saved')
})

console.log('continue...')
