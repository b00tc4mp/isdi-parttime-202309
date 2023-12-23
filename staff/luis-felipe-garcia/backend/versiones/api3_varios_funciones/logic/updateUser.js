const CSV = require(('../utils/CSV'))
const findIndexById = require('../data/findIndexById')
const { validateObject, validateFunction } = require("../utils/validators")



function updateUser(user, callback) {
    try {
        validateObject(user, 'user')
        validateFunction(callback, 'callback')

        CSV.loadAsObject('./data/users.csv', (error, users) => {
            if (error) {
                callback(error)
                return
            }

            findIndexById('./data/users.csv', user.id, (error, index) => {

                if (error) {
                    console.error(error)
                    return
                }
                console.log('index found', index)
                users[index] = user
                console.log(user)

                CSV.saveFromObject('./data/users.csv', users, error => {
                    if (error) {
                        callback(error)
                        return
                    }
                    callback(null)
                })
            })
        })

    } catch (error) {
        callback(error)
    }
}


module.exports = updateUser