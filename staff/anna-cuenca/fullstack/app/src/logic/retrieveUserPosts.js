import session from './session'
import { validate, errors } from 'com'
const { SystemError } = errors

function retrieveUserPosts(userId) {
    validate.id(userId, 'userId')


    const req = {

        method: 'GET',

        headers: {
            'Authorization': `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/posts`, req) //hacemos la petición al servidor

        .catch(error => { throw new SystemError(error.message) })

        .then(res => {
            if (!res.ok) {
                // No ha ido bien, devolvemos el error
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }
            // si va bien, extraemos de la respuesta los posts

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
        })



}

export default retrieveUserPosts