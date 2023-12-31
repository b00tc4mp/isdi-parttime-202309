const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')
const { NotFoundError, SystemError } = require('../utils/errors')

function toggleFavPost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(new SystemError(error))

            return
        }

        const user = users.find(user => userId === user.id)

        if (!user) {
            callback(new NotFoundError('user not found'))
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error))

                return
            }

            const post = posts.find(post => postId === post.id)

            if (!post) {
                callback(new NotFoundError('post not found'))
                
                return
            }

            const indexPost = user.favs.indexOf(postId)

            if (indexPost < 0) {
                user.favs.push(postId)
            } else {
                user.favs.splice(indexPost, 1)
            }

            JSON.stringifyToFile('./data/users.json', users, error => {
                if (error) {
                    callback(new SystemError(error))

                    return
                }

                callback(null)
            })
        })
    })
}

module.exports = toggleFavPost