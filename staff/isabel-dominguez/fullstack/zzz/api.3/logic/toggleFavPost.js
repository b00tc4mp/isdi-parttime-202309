const JSON = require("../utils/JSON")
const { NotFoundError, SystemError } = require("../utils/errors")
const { validateText, validateFunction } = require("../utils/validators")

function toggleFavPost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            return callback(new SystemError(error.message))
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            return callback(new NotFoundError('user not found'))
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                return callback(new SystemError(error.message))
            }

            const postIndex = posts.findIndex(post => post.id === postId)

            if (postIndex < 0) {
                return callback(new NotFoundError('post not found'))
            }

            const post = posts[postIndex]

            const postIdIndex = user.favs.indexOf(postId)

            if (postIdIndex < 0) {
                user.favs.push(postId)
            } else {
                user.favs.splice(postIdIndex, 1)
            }

            JSON.stringifyToFile('./data/users.json', users, error => {
                if (error) {
                    return callback(new SystemError(error.message))
                }

                callback(null)
            })
        })
    })
}

module.exports = toggleFavPost