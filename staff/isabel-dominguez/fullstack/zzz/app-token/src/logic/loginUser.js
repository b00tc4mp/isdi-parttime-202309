import validate from './helpers/validate'
import context from './context'

export default function loginUser(email, password, callback) {
    validate.text(email)
    validate.text(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/auth`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(token => {
                    const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
                    const payloadJson = atob(payloadB64)
                    const payload = JSON.parse(payloadJson)
                    const userId = payload.sub

                    context.sessionUserId = userId
                    context.token = token

                    callback(null)
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}