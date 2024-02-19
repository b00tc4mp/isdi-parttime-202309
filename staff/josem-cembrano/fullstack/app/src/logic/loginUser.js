import { validate, errors } from 'com'
const { SystemError } = errors

export default function loginUser(email, password) {
    validate.email(email)
    validate.password(password)

    return (async () => {
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }

        let res
        try {
            res = await fetch(`${import.meta.env.VITE_API_URL}/users/auth`, req)
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!res.ok) {
            let body

            try {
                body = await res.json()
            } catch (error) {
                throw new SystemError(error.message)
            }
            throw new errors[body.error](body.message)
        }

        try {
            const token = await res.json()

            //extraemos la parte que nos interesa del payload (informacion del usuario comprendida entre el 1punto y 2punto)
            const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
            //convertimos a JSON el payload localizado.
            const payloadJson = atob(payloadB64)
            //parseamos"convertimos a objeto" el payload que previamente hemos convertido a JSON.
            const payload = JSON.parse(payloadJson)
            //con el payload convertido a objeto, seleccionamos el campo "sub" del objeto, "sub" contiene en este caso el userId.
            const userId = payload.sub

            this.sessionUserId = userId
            this.token = token
        } catch (error) {
            throw new SystemError(error.message)
        }

    })()
}