// import { validate, errors } from 'com'


// import { User } from '../data/models.js'

// const { NotFoundError, CredentialsError, SystemError, DuplicityError, ContentError } = errors


// function changeEmailUser(userId, newEmail, repeatNewEmail, password) {
//     // TODO validate inputs
//     // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero
//     validate.id(userId, 'user id')


//     validate.email(newEmail, 'new email')
//     validate.email(repeatNewEmail, 'new email confirm')
//     validate.password(password, 'password')



//     //hay que hacerlo en la carpeta raiz, onde se ejecuta 

//     return User.findById(userId)
//         .catch(error => { throw new SystemError(error.message) })
//         .then(user => {
//             if (!user) {
//                 throw new NotFoundError('User not found')

//             }

//             if (user.password !== password) {
//                 throw new CredentialsError('wrong credentials')

//             }

//             if (user.email === newEmail) {
//                 throw new DuplicityError('New email must be different from the current email')

//             }

//             if (newEmail !== repeatNewEmail) {
//                 throw new ContentError('new email and its confirmation do not match')

//             }

//             if (user.password !== password)
//                 throw new CredentialsError('wrong password')

//             user.email = newEmail
//             return user.save()
//                 .catch(error => { throw new SystemError(error.message) })
//                 .then(() => { })




//         })

// }

// export default changeEmailUser

import { User } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError, NotFoundError, CredentialsError, ContentError } = errors


function changeEmailUser(userId, newEmail, newEmailConfirm, password) {
    validate.id(userId, 'user id')
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.text(password, 'password')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')

            }
            if (newEmail !== newEmailConfirm) {
                throw new ContentError('new email and its confirmation do not match')
            }
            if (user.password !== password) {
                throw new CredentialsError('wrong credentials')
            }

            user.email = newEmail
            user.save()
                .catch(error => { throw new SystemError(error.message) })
        })

}
export default changeEmailUser