const JSON = require('../utils/JSON')
const { NotFoundError } = require('../utils/errors')
const { validateText, validateFunction } = require('../utils/validators')


function retrievePost(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error) 

            return
        }

        const user = users.find(user => userId === user.id)

        if (!user) {
            callback(new NotFoundError('user not found'))

            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(error)

                return
            }

            posts.forEach(post => {
                post.liked = post.likes.includes(userId)

                const author = users.find(user => user.id === post.author)

                if (!author) {
                    callback(new NotFoundError('user not found'))

                    return
                }

                post.fav = user.favs.includes(post.id)
        
                post.author = {
                    email : author.email,
                    id: author.id,
                    name: author.name
                }
            })

            callback(null, posts)
        })
    })
}

module.exports = retrievePost