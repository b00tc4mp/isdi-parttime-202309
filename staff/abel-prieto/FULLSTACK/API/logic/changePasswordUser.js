const JSON = require("../utils/JSON")
const { SystemError, NotFoundError, ContentError } = require("../utils/errors")
const { validateText, validateFunction } = require("../utils/validators")

function changePasswordUser(userId, password, newPassword, againNewPassword, callback) {
    validateText(userId, 'user id')
    validateText(password, "password")
    validateText(newPassword, "new password")
    validateText(againNewPassword, "confirm new password")
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

        if (newPassword !== againNewPassword) {
            callback(new ContentError("wrong credentials"))

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