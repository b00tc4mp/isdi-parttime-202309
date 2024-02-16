import { validate } from 'com'


function logoutUser(callback) {
    validate.function(callback, 'callback')

    this.token = null
    this.sessionUserId = null

    callback(null)
}

export default logoutUser
