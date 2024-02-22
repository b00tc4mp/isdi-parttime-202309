import JSON from '../utils/JSON'
import validate from './helpers/validate.js'

function deleteUser(userId, password, callback) {
  validate.text(userId, 'user id')
  validate.text(password, 'password')
  validate.function(callback, 'callback')

  JSON.parseFromFile('./data/users.json', (error, users) => {
    if (error) {
      callback(error)

      return
    }

    let user = users.find((user) => user.id === userId)

    if (!user) {
      callback(new Error('user not found'))

      return
    }

    if (user.password !== password) {
      callback(new Error('wrong credentials'))

      return
    }

    const index = users.indexOf(user)

    users.splice(index, 1)

    JSON.stringifyToFile('./data/users.json', users, (error) => {
      if (error) {
        callback(error)

        return
      }

      callback(null, user.id)
    })
  })
}

export default deleteUser
