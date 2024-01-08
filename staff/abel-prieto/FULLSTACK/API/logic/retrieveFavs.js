const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')
const { SystemError, NotFoundError } = require('../utils/errors')

function retrieveFavs(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(new SystemError(error))

            return
        }

        const user = users.find(user => userId === user.id)

        if (!user) {
            callback(new NotFoundError(error))

            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error))

                return
            }

            const favs = []

            user.favs.forEach(fav => {
                favs.push(posts.find(post => post.id === fav))
            })

            callback(null, favs)
        })
    })
}

module.exports = retrieveFavs