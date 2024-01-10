import { validateText, validateFunction } from "../utils/validators"
import context from "./context"

// EDIT POST TEXT

export default function toggleEditPostText(postId, postText, callback) {
    validateText(postId, 'post id')
    validateText(postText, 'texts post')
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${String(context.sessionUserId)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postText })
    }

    fetch(`http://localhost:8000/newpost/${String(postId)}`, req)
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