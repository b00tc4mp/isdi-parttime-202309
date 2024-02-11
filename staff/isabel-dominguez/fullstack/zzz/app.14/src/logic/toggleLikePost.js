import context from './context'
import { validate, errors } from 'com'

export default function toggleLikePost(postId, callback) {
    validate.id(postId, "post id")
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/likes`, req)
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