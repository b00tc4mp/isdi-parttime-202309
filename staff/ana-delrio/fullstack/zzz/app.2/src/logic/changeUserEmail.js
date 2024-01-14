import { validateText } from '../utils/validators'


function changeUserEmail(newEmail, newEmailConfirm, password) {
    validateText(newEmail, 'new email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')

    //TODO CALL API

}

export default changeUserEmail