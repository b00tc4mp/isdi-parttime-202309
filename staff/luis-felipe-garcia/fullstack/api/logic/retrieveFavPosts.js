const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')
const { SystemError, NotFoundError } = require('../utils/errors')

function retrieveFavPosts(userId, callback) {
    validateText(userId)
    validateFunction(callback)

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(new SystemError(error.message))
            return
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new NotFoundError('user do not exist'))
            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error.message))
                return
            }

            let userFavPosts = []

            user.favs.forEach(fav => {
                userFavPosts.push(posts.find(post => post.id === fav))
                
            })

            callback(null, userFavPosts)

        })
    })





}


module.exports = retrieveFavPosts
