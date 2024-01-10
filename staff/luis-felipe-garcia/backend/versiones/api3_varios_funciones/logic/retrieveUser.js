const { error } = require("console")
const { validateFunction } = require("../utils/validators")
const findUserById = require("../data/findUserById")

const CSV = require (('../utils/CSV'))

function retrieveUser (id, callback) {
    validateFunction(callback, 'callback')
    CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        findUserById(id, users, (error, user) => {
            if (error) {
                callback(error)
                return
            }

            if(!user) {
                callback(new Error ('user not found'))
                return
            }

            delete user.password
            callback(null, user)
        })
    })

}

module.exports = retrieveUser