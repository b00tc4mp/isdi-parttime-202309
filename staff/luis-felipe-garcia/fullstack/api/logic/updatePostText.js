const JSON = require('../utils/JSON')
const { validateText, validateFunction } = require('../utils/validators')
const { SystemError, NotFoundError, CredentialsError } = require('../utils/errors')

function updatePostText(userId, postId, text, callback) {
    validateText(userId)
    validateText(postId)
    validateText(text)
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

            const post = posts.find(post => post.id === postId)
            

            if (!post) {
                callback(new NotFoundError('post do not exist'))
                return
            }
            if (userId !== post.author) {
                callback(new CredentialsError('wrong credentials'))
                return
            }

            

            post.text = text
            console.log(post)

            JSON.stringifyToFile('./data/posts.json', posts, error => {
                if (error) {
                    callback(new SystemError('error.message'))
                    return
                }
                callback(null)
            })


        })
    })

        

}

module.exports = updatePostText