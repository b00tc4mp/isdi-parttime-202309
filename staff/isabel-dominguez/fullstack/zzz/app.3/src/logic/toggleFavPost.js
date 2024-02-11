import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function toggleFavPost(postId, callback) {
    validateText(postId, "post id")
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    fetch(`http://localhost:8000/posts/${postId}/favs`, req)
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