import { validate, errors } from 'com'
import session from './session'



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
                return res.json() //recibimos un texto de la api y lo convertimos en objeto
                    //esa conversión la recogemos en lo que llamamoss body
                    //como la respuesta no ha sido ok, el callback recogerá el error que tenga el body
                    // el callback recibe el body (que es un bojeto), del body extrae el propiedad message
                    // crea un objeto nuevo del tipo error y lo envía al callback
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })


            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(token => {

                    //esto me da el payload en base 64
                    const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
                    //con atob, convierto de base 64 a JSON
                    const payloadJson = atob(payloadB64)
                    // lo convertimos a objeto
                    const payload = JSON.parse(payloadJson)
                    //desestrtucturamos y nos quedamos con el sub
                    const userId = payload.sub //acabar de entender esto 
                    // lo guardo en el sessionto
                    session.sessionUserId = userId
                    //me guardo el token en el sessiono, para poder usarlo desde otras logicas 
                    session.token = token


                })
        })

}

export default loginUser