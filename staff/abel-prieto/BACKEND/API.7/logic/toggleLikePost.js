const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')


function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error)
            
            return
        }
        
        const user = users.find(user => userId === user.id)

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(error)

                return
            }

            const postIndex = posts.findIndex(post => post.id === postId)

            if (!postIndex < 0) {
                callback(new Error('post not found'))
            }

            const post = posts[postIndex]

            const userIndex = post.likes.indexOf(userId)

            if (userIndex < 0) {
                post.likes.push(userId)
            } else {
                post.likes.splice(userIndex, 1)
            }

            JSON.stringifyToFile('./data/posts.json', posts, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })

        })
     })
}

module.exports = toggleLikePost