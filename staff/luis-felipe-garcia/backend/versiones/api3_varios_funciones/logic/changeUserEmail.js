const CSV = require(('../utils/CSV'))
const { validateText, validateFunction } = require('../utils/validators')
const findUserById = require('../data/findUserById')
const updateUser = require('./updateUser')

function changeUserEmail(users, id,  newEmail, newEmailConfirm, password, callback) {
    validateText(id, 'id')
    validateText(newEmail, 'new email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    /*CSV.loadAsObject('./data/users.csv', (error, users) => {
        if (error) {
            callback(error)
            return
        }*/

        findUserById(id, users, (error, user) => {
            console.log(id)
            if (error) {
                console.error(error)
                return
            }
            console.log('user found', user)

            if (!user || user.password !== password)
                throw new Error('wrong credentials')

            if (newEmail !== newEmailConfirm)
                throw new Error('new email and its confirmation do not match')

            user.email = newEmail
            console.log('user to update', user)

            updateUser(user, (error, index) => {
                if (error) {
                    console.error(error)
                    return
                }
            })
            callback(null, user)
            console.log('new user data', user)

        })
    /*})*/
}

module.exports = changeUserEmail