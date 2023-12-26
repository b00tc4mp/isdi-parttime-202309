const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')
const generateId = require('../data/generateId')
const { SystemError, NotFoundError, AuthenticateError } = require('../utils/errors')

function createPost(userId, image, text, callback) {
    validateText(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(new SystemError(error.message))

            return
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new NotFoundError('user not found'))

            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error.message))

                return
            }

            const post = {
                id: generateId(),
                author: userId,
                image,
                text,
                likes: []
            }

            posts.push(post)

            JSON.stringifyToFile('./data/posts.json', posts, error => {
                if (error) {
                    callback(new SystemError(error.message))

                    return
                }

                callback(null)
            })
        })
    })
}

module.exports = createPost
