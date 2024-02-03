import validate from './helpers/validate'
import context from './context'

import errors from './errors'

export default function deleteUser(userId, callback) {
    validate.text(userId, "user id")
    validate.function(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${context.token}`,
            'Content-Type': 'application/json'
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/:userId`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}