import { validateText } from "../utils/validators"


function changeUserEmail(newEmail, newEmailConfirm, password, callback) {
    validateText(newEmail, 'new email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')

 /*   TO CALL API*/

    // db.users.findById(this.sessionUserId, (error, user) => {
    //     if (error) {
    //         callback(error)
    //         return
    //     }

    //     if (!user || user.password !== password)
    //         throw new Error('wrong credentials')

    //     if (newEmail !== newEmailConfirm)
    //         throw new Error('new email and its confirmation do not match')

    //     user.email = newEmail

    //     db.users.update(user)
    //     callback(null, user)

    // })


}

export default changeUserEmail