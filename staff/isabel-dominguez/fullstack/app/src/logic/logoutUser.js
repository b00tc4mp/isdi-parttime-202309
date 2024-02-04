import validate from './helpers/validate'
import context from './context'

export default function logoutUser(callback) {
    validate.function(callback, 'callback')

    context.token = null

    callback(null)
}