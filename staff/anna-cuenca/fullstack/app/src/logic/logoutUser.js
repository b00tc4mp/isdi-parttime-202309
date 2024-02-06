// import session from './session'
// import { validate, errors } from 'com'

// const { SystemError } = errors

// function logoutUser(callback) {
//     validate.function(callback, 'callback')

//     session.token = null
//     session.sessionUserId = null

//     callback(null)

// }

// export default logoutUser

import session from './session'




function logoutUser() {

    return new Promise((resolve) => {
        session.token = null
        session.sessionUserId = null

        resolve()
    })

}

export default logoutUser