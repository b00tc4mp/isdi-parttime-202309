import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function updatePostText(postId, text, callback) {
    validateText(postId, 'post id')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

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

    fetch(`http://localhost:8000/posts/${postId}`, req)
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