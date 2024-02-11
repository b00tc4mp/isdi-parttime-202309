import validate from './helpers/validate'
import context from './context'

import errors from './errors'

export default function retrieveFavPosts(callback) {
    validate.function(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.token}`
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