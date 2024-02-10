import { errors } from 'com';
import session from './session'

const { SystemError } = errors

export default function logoutUser() {
    return new Promise((resolve, reject) => {
        try {
            session.token = null;
            session.sessionUserId = null
            resolve("Logout successful")
        } catch (error) {
            reject(new SystemError(error.message))
        }
    })
}