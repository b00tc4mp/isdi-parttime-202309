const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')

function deletePost(postId, callback) {
    validateText(postId, 'id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/posts.json', (error, posts) => {
        if (error) {
            callback(error)
            return
        }

        let post = posts.find(post => post.id === postId)

        if (!post) {
            callback(new Error('Post not found'))
            return
        }

        const index = posts.indexOf(post)

        posts.splice(index, 1)

        JSON.stringifyToFile('./data/posts.json', posts, (error) => {
            if (error) {
                callback(error)
                return
            }

            callback(null, post.id)
        })
    })
}

module.exports = deletePost