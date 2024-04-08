import { validateText } from '../utils/validators'

import context from './context'

function toggleLikePost(postId, callback) {
    validateText(postId, 'post id')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    fetch(`http://localhost:8000/posts/${postId}/likes`, req)
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

export default toggleLikePost



