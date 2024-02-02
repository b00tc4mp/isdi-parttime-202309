import validate from './helpers/validate'
import context from './context'

export default function deletePost(postId, callback) {
    validate.text(postId, "post id")
    validate.function(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${context.token}`,
            'Content-Type': 'application/json'
        }
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