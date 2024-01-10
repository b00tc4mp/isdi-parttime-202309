const JSON = require ('../utils/JSON.js')
const generateId = require('../data/generateId.js')
const { validateText, validateFunction } = require('../utils/validators.js')

function createPost(userId, image, text, callback) {
    validateText(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if(error) {
            callback(error)
            return
        }

        const user = users.find(user => user.id === userId)

        if(!user) {
            callback(new Error('user not found'))
            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if(error) {
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

            JSON.stringifyToFile('./data/posts.json', post, error => {
                if(error){
                    callback(error)
                    return
                }

                callback(null)
            })
        })
    })



}

module.exports = createPost