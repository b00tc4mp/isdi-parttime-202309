import { validate, errors } from 'com'
import context from './context'



function loginUser(email, password, callback) {
    validate.email(email)
    validate.password(password)

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
                res.json() //recibimos un texto de la api y lo convertimos en objeto
                    //esa conversión la recogemos en lo que llamamoss body
                    //como la respuesta no ha sido ok, el callback recogerá el error que tenga el body
                    // el callback recibe el body (que es un bojeto), del body extrae el propiedad message
                    // crea un objeto nuevo del tipo error y lo envía al callback
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(token => {

                    //esto me da el payload en base 64
                    const payloadB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
                    //con atob, convierto de base 64 a JSON
                    const payloadJson = atob(payloadB64)
                    // lo convertimos a objeto
                    const payload = JSON.parse(payloadJson)
                    //desestrtucturamos y nos quedamos con el sub
                    const userId = payload.sub //acabar de entender esto 
                    // lo guardo en el contextto
                    context.sessionUserId = userId
                    //me guardo el token en el contexto, para poder usarlo desde otras logicas 
                    context.token = token

                    callback(null)
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))

}

export default loginUser