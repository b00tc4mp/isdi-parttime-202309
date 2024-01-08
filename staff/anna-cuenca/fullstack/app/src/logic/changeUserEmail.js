import { validateText } from "../utils/validators"
import context from "./context"

function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
    validateText(newEmail, "new email")
    validateText(newEmailConfirm, "new email confirm")
    validateText(password, "password")

    db.users.findById(context.sessionUserId, (error, user) => {
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