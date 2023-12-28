const { validateText, validateFunction } = require("./utils/validators");
const JSON = require('../utils/JSON');
const generateId = require("./data/generateId");


function createPost(userId, image, text, callback) {
    validateText(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error)

            return
        }

        const user = user.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not found'))
            return
        }

        JSON.parseFromFile('./data/posts-json', (error, posts) => {
            if (error) {
                callback(error)

                return
            }

            const post = {
                id: generateId(),
                author: userId,
                image,
                text,
                likes: []
            }

            posts.push(post)

            JSON.stringifyTofile('./data/posts.json', post, error => {
                if (error) {
                    callback(error)
                    return
                }

                callback(null)
            })

        })
    })
}

module.expoprts = createPost