const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')

const retrievePosts = (userId, callback) => {
    validateText(userId, 'post id')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error)

            return
        }

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(error)

                return
            }

            posts.forEach(post => {
                post.liked = post.likes.includes(userId)//le ponemos la propiedad "likes", si los likes incluyen el id del usuario (userId)

                const author = users.find(user => user.id === post.author)

                if (!author) {
                    callback(new Error('author does not exist'))

                    return
                }

                post.author = {
                    id: author.id,
                    name: author.name
                }

                post.fav = user.favs.includes(post.id)//le ponemos la propiedad "fav", si los favs incluyen el id del usuario (userId)
            })

            callback(null, posts)
        })
    })
}

module.exports = retrievePosts