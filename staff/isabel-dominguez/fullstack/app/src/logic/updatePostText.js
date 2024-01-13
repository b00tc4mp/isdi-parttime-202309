import validate from './helpers/validate'
import context from './context'

export default function updatePostText(userId, postId, text, callback) {
    validate.text(userId, 'user id')
    validate.text(postId, 'post id')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    const req = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${context.sessionUserId}`
        },
        body: JSON.stringify({
            postId,
            text
        })
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}