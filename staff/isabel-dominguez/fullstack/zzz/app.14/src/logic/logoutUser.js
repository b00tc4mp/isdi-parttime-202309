import context from './context'
import { validate } from 'com'

export default function logoutUser(callback) {
    validate.function(callback, 'callback')

    context.token = null

    callback(null)
}