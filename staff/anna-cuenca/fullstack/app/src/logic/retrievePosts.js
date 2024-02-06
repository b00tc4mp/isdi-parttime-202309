import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

function retrievePosts() {
    //la función toma un callback como argumento 

    //declaramos la constante req (es un objeto representando la solicitud HTTP que se enviará)
    const req = {
        //se indica el método de la solicitud, el GET es utilizado para recuperar datos
        method: 'GET',
        //se establecen los encabezados HTTP de la solicitud
        headers: {
            'Authorization': `Bearer ${session.token}`
        }
    }

    //se hace una llamada a la función fetch para realizar la solicitud HTTP a la URL
    // especificada: una combinacion de la variable de entorno ('VITE_API_URL) y el path
    // /posts ; Se pasa el objeto req como segundo parámetro a fetch
    return fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
        // es una promesa que maneja la respuesta ('res') del 'fetch'
        .catch(error => { throw new SystemError(error.message) })  // este error es
        .then(res => {
            if (!res.ok) { //se verifica si la respuesta fue exitosa o no
                return res.json() //convierte la respuesta a JSON
                    // si la conversión es exitosa, llama al callback con un nuevo error
                    // que contiene el mensaje del cuerpo de la respuesta
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
                //si hay un error al convertir la respuesta a JSON, llama al callback con ese error


            } //finaliza la respuesta no exitosa

            return res.json()

                .catch(error => { throw new SystemError(error.message) })


        })

}

export default retrievePosts