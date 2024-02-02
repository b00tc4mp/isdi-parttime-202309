import { validate, errors } from 'com'
import session from './session'

// LOGIN & AUTHENTICATE USER

export default function loginUser(email, password, callback) {
    validate.email(email)
    validate.password(password)
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
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(token => {
                    // Extraemos con .slice() el userId del formato B64 (base 64) del token
                    const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
                    // Descodificamos los datos en B64 con el método atob()
                    const payloadJson = atob(payloadB64)
                    // Parseamos a formato JSON los datos decodificados
                    const payload = JSON.parse(payloadJson)
                    // El payload devuelve un objeto { sub: userId } con la propiedad sub
                    const userId = payload.sub

                    session.sessionUserId = userId
                    session.token = token

                    callback(null)
                })
                .catch(error => callback(error))
        })

        .catch(error => callback(error))
}