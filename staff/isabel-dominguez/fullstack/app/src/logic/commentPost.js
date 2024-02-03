import validate from './helpers/validate'
import context from './context'

import errors from './errors'

export default function commentPost(userId, postId, comment, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'postId')
    validate.text(comment, 'text')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ comment })
    }

    fetch(`${import.meta.env.VITE_API_URL}/newpost/${postId}/comments`, req)
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