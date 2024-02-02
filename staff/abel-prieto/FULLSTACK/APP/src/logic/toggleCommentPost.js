import session from './session'
import { validate, errors } from 'com'

// COMMENT TEXT POSTS

export default function toggleCommentPostText(postId, postComment, callback) {
    validate.text(postId, "post id")
    validate.text(postComment, "comment")
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${String(session.sessionUserId)}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ postComment })
    }

    fetch(`${import.meta.env.VITE_API_URL}/newpost/${String(postId)}/comments`, req)
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