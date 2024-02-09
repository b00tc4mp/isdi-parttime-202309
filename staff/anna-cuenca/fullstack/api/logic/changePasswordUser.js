import { validate, errors } from 'com'


import bcrypt from 'bcryptjs'

import { User } from '../data/models.js'

const { NotFoundError, CredentialsError, SystemError, DuplicityError } = errors

function changePasswordUser(userId, password, newPassword, repeatNewPassword) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero

    validate.id(userId, 'user id')
    validate.password(password, 'password')
    validate.password(newPassword, 'password')
    validate.password(repeatNewPassword, 'password')

    return (async () => {


        if (newPassword !== repeatNewPassword)
            throw new CredentialsError('The new email and the confirmation password do not match')

        let user

        try {
            user = await User.findById(userId)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!user)
            throw new NotFoundError('User not found')

        let match

        try {
            match = await bcrypt.compare(password, user.password)

        } catch (error) {
            throw new SystemError(error.message)
        }


        if (!match)
            throw new CredentialsError('wrong password')

        if (password === newPassword)
            throw new DuplicityError('New password must be different from current one')

        let hashedPassword

        try {
            hashedPassword = await bcrypt.hash(newPassword, 8)
        } catch (error) {
            throw new SystemError(error.message)
        }

        try {
            await User.findByIdAndUpdate(userId, { password: hashedPassword })
        } catch (error) {
            throw new SystemError(error.message)
        }

    })()


}

export default changePasswordUser

