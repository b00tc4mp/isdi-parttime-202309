const JSON = require("../utils/JSON")
const { SystemError, NotFoundError, ContentError } = require("../utils/errors")
const { validateText, validateFunction } = require("../utils/validators")
 
function changeEmailUser(email, newEmail, password, callback) {
    validateText(email, "email")
    validateText(newEmail, "newEmail")
    validateText(password, "password")
    validateFunction(callback, "callback")

    JSON.parseFromFile("./data/users.json", (error, users) => {
        if (error) {
            callback(new SystemError(error.message))

            return
        }

        let user = users.find(user => user.email === email)

        if (!user) {
            callback(new NotFoundError("user not found"))

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