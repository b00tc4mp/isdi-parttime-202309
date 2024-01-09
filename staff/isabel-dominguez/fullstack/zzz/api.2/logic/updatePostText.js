const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')

function updatePostText(postId, text, sessionUserId, callback) {
    validateText(postId, 'post id')
    validateText(text, 'text')
    validateText(sessionUserId, 'sessionUserId')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/posts.json', (error, posts) => {
        if (error) {
            callback(error)
            return
        }

        const postIndex = posts.findIndex(post => post.id === postId)

        if (postIndex < 0) {
            callback(new Error('post not found'))
            return
        }

        const post = posts[postIndex]

        if (post.author !== sessionUserId) {
            callback(new Error("post doesn't belong to user "))
            return
        }

        post.text = text

        JSON.stringifyToFile('./data/posts.json', posts, (error) => {
            if (error) {
                callback(error);
                return;
            }

            callback(null);
        })
    })
}

module.exports = updatePostText