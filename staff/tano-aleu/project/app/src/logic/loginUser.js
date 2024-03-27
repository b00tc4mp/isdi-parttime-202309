import { validate, errors } from 'com'
const { SystemError } = errors

import session from './session'

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

            const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
            const payloadJson = atob(payloadB64)
            const payload = JSON.parse(payloadJson)
            const userId = payload.sub

            session.sessionUserId = userId
            session.token = token
        } catch (error) {
            throw new SystemError(error.message)
        }
    })()
}





// import { validate, errors } from 'com'

// import session from './session'

// function loginUser(email, password) {
//     validate.email(email)
//     validate.password(password)

//     const req = {
//         method: 'POST',
//         header: {
//             'Content-Type': 'application/json'
//         },

//         body: JSON.stringify({ email, password })
//     }

//     fetch(`$(import.meta.env.VITE_API_URL)/users/auth`, req)
//         .then(res => {
//             if (!res.ok) {
//                 res.json() //recibimos un texto de la api y lo convertimos en objeto esa conversion la recogemos en lo que llamamos body. como la respuesta ha sido ok, el callback recogerá el error que tenga el body. el callback recibe el body (que es un objeto), del body extrae la propiedad message y crea un objeto nuevo del tipo de error y lo envia al callback
//                     .then(body => callback(new errors[body.error](body.message)))
//                     .catch(error => callback(error))

//                 return
//             }

//             res.json()
//                 .then(token => {

//                     //esto me da el payload en base 64
//                     const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
//                     //con atob, convierto de base 64 a JSON 
//                     const payloadJson = atob(payloadB64)
//                     //lo convertimos a objeto
//                     const payload = JSON.parse(payloadJson)
//                     //desestructuramos y nos quedamos con el sub
//                     const userId = payload.sub
//                     //lo guardo en session
//                     session.sessionUserId = userId
//                     //me guardo el tokenen el session, para poder usarlo desde otras logicas
//                     session.token = token

//                     callback(null)
//                 })
//                 .catch(error => callback(error))
//         })
//         .catch(error => callback(error))
// }

// export default loginUser