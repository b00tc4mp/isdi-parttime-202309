import session from './session'
import { validate } from 'com'

export default function logoutUser(callback) {
    validate.function(callback, 'callback')

    session.sessionUserId = null

    callback(null)
}