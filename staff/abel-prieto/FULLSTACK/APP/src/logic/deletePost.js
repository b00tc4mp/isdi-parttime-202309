import { validateFunction, validateText } from "../utils/validators"
import context from './context'

// DELETE POST (PENDIENTE)

export default function deletePost(postId, callback) {
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${String(context.sessionUserId)}`
        }
    }

    fetch(`http://localhost:8000/users/${String(postId)}/favs`, req)
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