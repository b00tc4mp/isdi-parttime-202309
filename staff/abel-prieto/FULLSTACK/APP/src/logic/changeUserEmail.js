import { validateFunction, validateText } from "../utils/validators"
import context from "./context"

// CHECK CHANGE EMAIL 

export default function changeUserEmail(newEmail, confirmNewEmail, password, callback) {
    validateText(newEmail, 'new email')
    validateText(confirmNewEmail, 'new email confirm')
    validateText(password, 'password')
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

        if (newEmail !== confirmNewEmail) {
            callback(new Error('New email and your confirm doesnt match each other'))
        }
    
        user.email = newEmail

        db.users.update(user, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}