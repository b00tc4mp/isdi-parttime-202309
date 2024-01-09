import { validateFunction } from "../utils/validators"
import context from './context'

export default function logoutUser(callback) {
    validateFunction(callback, 'callback')
    context.sessionUserId = null

    callback(null)
}