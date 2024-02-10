import session from './session'
import { validate, errors } from 'com'

export default function deletePost(postId, callback) {
    validate.id(postId, "post id")
    validate.function(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${session.token}`,
            'Content-Type': 'application/json'
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, req)
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