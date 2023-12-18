const JSON = require("../utils/JSON")
const { SystemError, NotFoundError, ContentError } = require("../utils/errors")
const { validateText, validateFunction } = require("../utils/validators")

function changePasswordUser(email, password, newPassword, callback) {
    validateText(email, "email")
    validateText(password, "password")
    validateText(newPassword, "new password")
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
            user.password = newPassword

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

module.exports = changePasswordUser