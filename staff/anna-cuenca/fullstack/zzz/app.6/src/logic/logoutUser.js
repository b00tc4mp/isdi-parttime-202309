import context from "./context"
import { validate } from "com"

function logoutUser(callback) {
    validate.function(callback, 'callback')

    context.sessionUserId = null

    callback(null)

}

export default logoutUser