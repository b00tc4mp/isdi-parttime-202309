
import { validateText } from "../utils/validators"

function changeUserPassword(newPassword, newPasswordConfirm, password) {
    validateText(newPassword, 'new password')
    validateText(newPasswordConfirm, 'new password confirm')
    validateText(password, 'password')

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