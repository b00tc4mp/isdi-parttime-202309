import { validateText } from "../utils/validators"
import context from "./context"

function changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
    validateText(newPassword, "new password")
    validateText(newPasswordConfirm, "new password confirm")
    validateText(password, "password")

    db.users.findById(context.sessionUserId, (error, user) => {
        if (error) {
            callback(error)
            return
        }

        if (!user || user.password !== password) {
            callback(new Error("Wrong credentials"))
            return
        }

        if (newPassword !== newPasswordConfirm) {
            callback(new Error("New password and its confirmation do not match"))
            return
        }
        user.password = newPassword
        db.users.update(user, (error) => {
            if (error) {
                callback(error)
                return
            }
            callback(null)
        })

    })
}


export default changeUserPassword