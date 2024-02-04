import { validate, errors } from 'com'
import session from './session'

// RETRIEVE USER POSTS

export default function retrieveUserPosts(callback) {
    validate.function(callback, 'callback')

    const req = {
        method: 'GET',
        headers: Autorization `Bearer ${session.token}`
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, req)
        .then(() => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(posts = callback(null, posts))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}