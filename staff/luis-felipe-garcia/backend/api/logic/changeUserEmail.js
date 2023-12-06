const CVS = require(('../utils/CSV'))
const { validateText, validateFunction } = require('../utils/validators')
const findUserById = require('./findUserById')

function changeUserEmail(id, newEmail, newEmailConfirm, password, callback) {
    validateText(id, 'id')
    validateText(newEmail, 'new email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    try {
        findUserById(id, (error, user) => {
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


            //db.users.update(user)
            callback(null, user)
            console.log('new user data', user)

        })
    } catch (error) {
        console.log(error)

    }
}

module.exports = changeUserEmail