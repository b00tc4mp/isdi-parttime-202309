const JSON = require('../utils/JSON.js')
const { validateText, validateFunction } = require('../utils/validators.js')
const { NotFoundError, SystemError, ContentError, CredentialsError } = require("../utils/errors")

function deletePost(userId, postId, callback) {
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
            callback(new NotFoundError('user do not dound'))
            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error.message))
                return
            }

            const post = posts.find(post => post.id === postId)

            if (!post) {
                callback(new NotFoundError('post do not found'))
                return
            }

            if (userId !== post.author) {
                callback(new CredentialsError('post do not belongs to user'))
                return
            }

            users.forEach(user => {
                if(user.favs.includes(postId)) {

                    favIndexToRemove = user.favs.findIndex(fav => fav === postId)
                    user.favs.splice(favIndexToRemove, 1)
                }

            })
            JSON.stringifyToFile('./data/users.json', users, error => {
                if(error) {callback(new SystemError(error.message))
                return
                }

            })
            
            const postToDeteleIndex = posts.findIndex(post => post.id === postId)
            posts.splice(postToDeteleIndex, 1)        
            
            JSON.stringifyToFile('./data/posts.json', posts, error => {
                if(error) {
                    callback(new SystemError(error.message))
                    return
                }

                callback(null)
            })

        })




    })
}

module.exports = deletePost