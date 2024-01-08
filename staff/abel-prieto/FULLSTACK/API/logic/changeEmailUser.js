const JSON = require("../utils/JSON")
const { SystemError, NotFoundError, ContentError } = require("../utils/errors")
const { validateText, validateFunction } = require("../utils/validators")
 
function changeEmailUser(userId, newEmail, againNewEmail, password, callback) {
    validateText(userId, "user id")
    validateText(newEmail, "new email")
    validateText(againNewEmail, "again new email")
    validateText(password, "password")
    validateFunction(callback, "callback")

    JSON.parseFromFile("./data/users.json", (error, users) => {
        if (error) {
            callback(new SystemError(error.message))

            return
        }

        let user = users.find(user => user.id === userId)

        if (!user) {
            callback(new NotFoundError("user not found"))

            return
        }

        if (newEmail !== againNewEmail) {
            callback(new ContentError("wrong credentials"))

            return
        }

        if (password !== user.password) {
            callback(new ContentError("wrong credentials"))

            return
            
        } else {
            user.email = newEmail
            
            JSON.stringifyToFile("./data/users.json", users, error => {
                if (error) {
                    callback(new SystemError(error.message))

                    return
                }

                callback(null)
            })
        }


    })
}

module.exports = changeEmailUser