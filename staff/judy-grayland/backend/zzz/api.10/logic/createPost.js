const { validateText, validateFunction } = require('./helpers/validators')

// TODO use models
// N.B. el callback que pasamos como parámetro se come los errores y el caso positivo al final (callback (null))
function createPost(userId, image, text, callback) {
  validateText(userId, 'user  id'), validateText(image, 'image')
  validateText(text, 'text')
  validateFunction(callback, 'callback')

  // lo primero es comprobar que el usuario existe

  // JSON.parseFromFile('./data/users.json', (error, users) => {
  //   if (error) {
  //     callback(error)

  //     return
  //   }

  //   const user = users.find((user) => user.id === userId)

  //   if (!user) {
  //     callback(new Error('user not found'))

  //     return
  //   }

  //   // ahora hay que registrar el nuevo post. Primero leemos los posts, luego

  //   JSON.parseFromFile('./data/posts.json', (error, posts) => {
  //     if (error) {
  //       callback(error)

  //       return
  //     }

  //     const post = {
  //       id: generateId(),
  //       author: userId,
  //       image,
  //       text,
  //       likes: [],
  //     }

  //     posts.push(post)

  //     JSON.stringifyToFile('./data/posts.json', posts, (error) => {
  //       if (error) {
  //         callback(error)

  //         return
  //       }

  //       callback(null)
  //     })
  //   })
  // })
}

module.exports = createPost
