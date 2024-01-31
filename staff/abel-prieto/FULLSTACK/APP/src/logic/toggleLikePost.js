import { validate, errors } from 'com'
import session from './session'

// LIKE POST & UPDATE

export default function toggleLikePost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/newpost/${postId}/likes`, req)
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