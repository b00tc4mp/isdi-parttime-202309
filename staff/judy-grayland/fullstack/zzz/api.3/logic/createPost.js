const validate = require('./helpers/validate')
const { NotFoundError, SystemError } = require('./errors')

const { User, Post } = require('../data/models')

// TODO use models
// N.B. el callback que pasamos como parámetro se come los errores y el caso positivo al final (callback (null))
function createPost(userId, image, text, callback) {
  validate.id(userId, 'user  id')
  validate.text(image, 'image')
  validate.text(text, 'text')
  validate.function(callback, 'callback')

  User.findById(userId)
    .lean()
    .then((user) => {
      if (!user) {
        callback(new NotFoundError('user not found'))
        return
      }

      Post.create({ author: userId, image, text })
        .then(() => callback(null))
        .catch((error) => {
          if (error) {
            callback(new SystemError(error.message))

            return
          }
        })
    })
    .catch((error) => callback(new SystemError(error.message)))
}

module.exports = createPost
