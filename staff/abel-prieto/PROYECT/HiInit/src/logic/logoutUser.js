import session from './session.js'

function logoutUser(callback) {
    session.sessionUserId = null

    callback(null)
}

export default logoutUser