import { validateText } from '../utils/validators'
function changeUserPassword(newPassword, newPasswordConfirm, password) {
    validateText(newPassword, 'new password')
    validateText(newPasswordConfirm, 'new password confirm')
    validateText(password, 'password')

    // TODO CALL APPI
}

export default changeUserPassword