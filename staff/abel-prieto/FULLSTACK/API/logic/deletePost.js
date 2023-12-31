const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')
const { SystemError, NotFoundError } = require('../utils/errors')


function deletePost(userId, postId, callback) {
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
            callback(new NotFoundError(error))

            return
        }

        // TIENE QUE SER UN POST DEL AUTHOR
        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error))
    
                return
            }
    
            const postIndex = posts.findIndex(post => postId === post.id)
    
            if (postIndex < 0) {
                callback(new NotFoundError(error))
    
                return
            }

            const usersWithFav = users.filter(user => user.favs.includes(postId))
            
            usersWithFav.forEach(user => {

                const index = user.favs.indexOf(postId)

                user.favs.splice(index, 1)
            })
    
            posts.splice(postIndex, 1)

            JSON.stringifyToFile('./data/users.json', users, error => {
                if (error) {
                    callback(new SystemError(error))

                    return
                }

                JSON.stringifyToFile('./data/posts.json', posts, error => {
                    if (error) {
                        callback(new SystemError(error))

                        return
                    }

                    callback(null)
                })
            })
        })
    })
}

module.exports = deletePost