import { validateFunction, validateText } from "../utils/validators"
import context from "./context"

// CHECK CHANGE PASSWORD 

export default function changeUserPassword(password, newPassword, againNewPassword, callback) {
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(againNewPassword, 'repeat password')
    validateFunction(callback, 'callback')

    db.users.findById(context.sessionUserId, (error, user) => {
        if (error) {
            callback(error)

            return
        }

        if (!user || user.password !== password) {
            callback(new Error('wrong credentials'))

            return
        }

        if (newPassword !== againNewPassword) {
            callback(new Error('New pass and his confirmation are not correct. Try again') )

            return
        }
    
        user.password = newPassword

        db.users.update(user, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}