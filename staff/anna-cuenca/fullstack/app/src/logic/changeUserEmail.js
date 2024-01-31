import { validate, errors } from 'com'
import session from "./session"

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
    validate.email(newEmail, "new email")
    validate.email(newEmailConfirm, "new email confirm")
    validate.email(password)

    db.users.findById(session.sessionUserId, (error, user) => {
        if (error) {
            callback(error)

            return
        }

        if (!user || user.password !== password) {
            callback(new Error("wrong credentials"))

            return
        }

        if (newEmail !== newEmailConfirm) {
            callback(new Error("new email and its confirmation do not match"))

            return
        }

        user.email = newEmail

        db.users.update(user, (error) => {
            if (error) {
                callback(error)

                return
            }

            callback(null) // por qué llegados a este punto, el valor de callback es undefined??
        })
    })
}

export default changeUserEmail