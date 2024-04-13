import validate from './helpers/validate'


function changeUserPassword(newPassword, newPasswordConfirm, password) {
    validate.password(newPassword, 'new password')
    validate.password(newPasswordConfirm, 'new password confirm')
    validateText.password(password)

    //TODO CALL API


}


export default changeUserPassword