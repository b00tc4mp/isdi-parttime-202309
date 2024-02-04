const { validateText, validateFunction } = require("../utils/validators")
const JSON = require('../utils/JSON')
const { NotFoundError, SystemError } = require("../utils/errors")


function toggleFavPost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
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

            const post = posts.find(post => post.id === postId)

            if (!post) {
                callback(new NotFoundError('post do not exist'))
                return
            }

            const postIdFavIndex = user.favs.findIndex(fav => fav.toString() === postId)

            if (postIdFavIndex < 0)
                user.favs.push(postId)
            else user.favs.splice(postIdFavIndex, 1)


            JSON.stringifyToFile('./data/users.json', users, error => {
                if (error) {
                    callback(new SystemError('error.message'))
                    return
                }
                callback(null)
            })

        })
    })
}

module.exports = toggleFavPost