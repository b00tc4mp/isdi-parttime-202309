import validate from './helpers/validate'
import context from './context'

import errors from './errors'

function loginUser(email, password, callback) {
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

                    callback(null)
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default loginUser