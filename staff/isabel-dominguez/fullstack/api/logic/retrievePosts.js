const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')

function retrievePosts(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            return callback(error)
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            return callback(new Error('User not found'))
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                return callback(error)
            }

            posts.forEach(post => {
                post.liked = post.likes.includes(userId)

                const author = users.find(user => user.id === post.author)

                // Verificar si el autor existe
                if (author) {
                    post.author = {
                        id: author.id,
                        name: author.name
                    }
                } else {
                    // Si el autor no existe
                    post.author = {
                        id: post.author,
                        name: 'Unknown Author'
                    }
                }

                post.fav = user.favs.includes(post.id)
            })

            callback(null, posts)
        })
    })
}

module.exports = retrievePosts