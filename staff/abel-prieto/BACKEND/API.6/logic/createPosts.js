const JSON = require("../utils/JSON")
const generateId = require("../data/generateId")
const { validateText, validateFunction } = require("../utils/validators")

function createPosts(userId, image, text, callback) {
    validateText(userId, "user")
    validateText(image, "image")
    validateText(text, "text")
    validateFunction(callback, "callback")

    JSON.parseFromFile("./data/users.json", (error, users) => {
        if (error) {
            callback(error)

            return
        }

        let user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error("user not found"))

            return
        }

        JSON.parseFromFile("./data/posts.json", (error, posts) => {
            if (error) {
                callback(error)

                return
            }
    
            const post = {
                id: generateId(),
                author: userId,
                image,
                text,
                likes : []
            }
    
            posts.push(post)
    
            JSON.stringifyToFile("./data/posts.json", posts, error => {
                if (error) {
                    callback(error)
    
                    return
                }
    
                callback(null)
            })
        })
    })
}

module.exports = createPosts