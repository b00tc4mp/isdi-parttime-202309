import { validate, errors } from 'com'


import { User } from '../data/models.js'

const { NotFoundError, CredentialsError, SystemError, DuplicityError } = errors

function changePasswordUser(userId, password, newPassword, repeatNewPassword) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validate.id(userId, 'user id')
    validate.password(password, 'password')
    validate.password(newPassword, 'password')
    validate.password(repeatNewPassword, 'password')


    return User.findById(userId)
        .catch(error => callback(new SystemError(error.message)))
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')

            }
            if (user.password !== password) {
                throw new CredentialsError('Wrong Credentials')

            }

            if (password === newPassword) {
                throw new DuplicityError('New password must be different from current one')

            }

            if (newPassword !== repeatNewPassword) {
                throw new CredentialsError('The new email and the confirmation password do not match')

            }
            user.password = newPassword

            user.save()
                .catch(error => { throw new SystemError(error.message) })


        })


}

export default changePasswordUser


