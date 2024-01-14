
import validate from "./helpers/validate"

function changeUserPassword(newPassword, newPasswordConfirm, password) {
    validate.password(newPassword, 'new password')
    validate.password(newPasswordConfirm, 'new password confirm')
    validate.password(password, 'password')

    //TO DO

    //     db.users.findById(this.sessionUserId, (error, user) => {
    //         if (error) {
    //             callback(error)
    //             return
    //         }

    //         if (!user || user.password !== password)
    //             throw new Error('wrong credentials')

    //         if (newPassword !== newPasswordConfirm)
    //             throw new Error('new password and its confirmation do not match')

    //         user.password = newPassword

    //         db.users.update(user, error => {
    //             if (error) {
    //                 callback(error)
    //                 return
    //             }

    //             callback(null)
    //         })

    //         callback(null, user)
    //     })
}


export default changeUserPassword