const CSV = require("../utils/CSV")
const generateId = require("../data/generateId")
const { validateText, validateFunction } = require("../utils/validators")

function createPosts(user, image, text, callback) {
    validateText(user, "user")
    validateText(image, "image")
    validateText(text, "text")
    validateFunction(callback, "callback")

    CSV.parseFromFile("./data/posts.csv", (error, posts) => {
        if (error) {
            callback(error)

            return
        }

        let post = posts.find(post => post.image === image)

        if (post) {
            callback(new Error("post already exists"))
        }

        post = {
            id: generateId(),
            user,
            image,
            text
        }

        posts.push(post)

        CSV.stringifyToFile("./data/posts.csv", posts, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = createPosts