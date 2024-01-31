import session from "./session"
import { validate } from "com"

function logoutUser(callback) {
    validate.function(callback, 'callback')

    session.sessionUserId = null

    callback(null)

}

export default logoutUser