import { validate, errors } from 'com'

function changeUserEmail(newEmail, newEmailConfirm, password) {
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.password(password)

    // TODO call api
}

export default changeUserEmail