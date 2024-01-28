import validate from './helpers/validate'
import context from "./context"

import errors from './errors'

function toggleLikePost(postId, callback) {
    validate.text(postId, 'post id')

    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${context.token}`
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
        .catch(error => console.error(error)) // este error es

}

export default toggleLikePost