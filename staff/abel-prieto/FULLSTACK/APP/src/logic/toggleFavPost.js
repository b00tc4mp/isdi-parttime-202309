import { validate, errors } from 'com'
import session from './session'

// FAV BUTTON

export default function toggleFavPost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${String(postId)}/favs`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}