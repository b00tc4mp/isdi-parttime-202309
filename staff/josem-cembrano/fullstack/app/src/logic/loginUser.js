import { validate, errors } from 'com'

import context from './context'
const { SystemError } = errors

function loginUser(email, password) {
    validate.email(email)
    validate.password(password)

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(token => {//extraemos la parte que nos interesa del payload (informacion del usuario comprendida entre el 1punto y 2punto)
                    const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
                    //convertimos a JSON el payload localizado.
                    const payloadJson = atob(payloadB64)
                    //parseamos"convertimos a objeto" el payload que previamente hemos convertido a JSON.
                    const payload = JSON.parse(payloadJson)
                    //con el payload convertido a objeto, seleccionamos el campo "sub" del objeto, "sub" contiene en este caso el userId.
                    const userId = payload.sub

                    context.sessionUserId = userId
                    context.token = token
                })
        })
}

export default loginUser