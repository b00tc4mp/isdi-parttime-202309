const CSV = require("../utils/CSV")
const { validateText, validateFunction } = require("../utils/validators")
 
function changeEmailUser(email, newEmail, password, callback) {
    validateText(email, "email")
    validateText(newEmail, "newEmail")
    validateText(password, "password")
    validateFunction(callback, "callback")

    CSV.loadAsObject("./data/users.csv", (error, users) => {
        if (error) {
            callback(error)

            return
        }

        let user = users.find(user => user.email === email)

        if (!user) {
            callback(new Error("user not found"))

            return
        }

        if (password !== user.password) {
            callback(new Error("wrong credentials"))

            return

        } else {
            user.email = newEmail
            
            CSV.saveFromObject("./data/users.csv", users, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        }


    })
}

module.exports = changeEmailUser