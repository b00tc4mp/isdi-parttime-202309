const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')

function retrievePost(postId, callback) {
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/posts.json', (error, posts) => {
        if (error) {
            callback(error)
            return
        }

        const post = posts.find(post => post.id === postId)

        if (!post) {
            callback(new Error('post not found'))
            return
        }

        callback(null, post)
    })
}

module.exports = retrievePost