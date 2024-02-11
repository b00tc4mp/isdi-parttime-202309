import session from './session'
import { validate, errors } from 'com'

export default function retrieveFavPosts(callback) {
    validate.function(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/fav-posts`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(favPosts => callback(null, favPosts))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}