import { validate } from 'com'


function changeUserEmail(newEmail, newEmailConfirm, password) {
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.password(password)

    //TODO CALL API

}

export default changeUserEmail