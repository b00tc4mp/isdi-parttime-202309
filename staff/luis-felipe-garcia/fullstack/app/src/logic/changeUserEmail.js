import validate from "./helpers/validate"


function changeUserEmail(newEmail, newEmailConfirm, password) {
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.password(password, 'password')

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