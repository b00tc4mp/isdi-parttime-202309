import session from './session'
import { validate, errors } from 'com'

function retrieveUserPosts(userId, callback) {
    validate.id(userId, 'userId')
    validate.function(callback, 'callback')

    const req = {

        method: 'GET',

        headers: {
            'Authorization': `Bearer ${session.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/posts`, req) //hacemos la petición al servidor

        .then(res => {
            if (!res.ok) {
                // No ha ido bien, devolvemos el error
                return res.json().then(body => {
                    throw new errors[body.error](body.message)
                });
            }
            // si va bien, extraemos de la respuesta los posts
            return res.json()
        })
        .then(posts => {
            // sedevuelve el callback sin error y con los datos de los posts
            callback(null, posts)
        })
        .catch(error => { //se recogen posibles errores

            console.error(error)
            callback(error)
        })


}

export default retrieveUserPosts