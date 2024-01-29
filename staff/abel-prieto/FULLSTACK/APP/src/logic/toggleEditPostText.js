import validate from "./helpers/validate"
import context from "./context"
import errors from "./errors"

// EDIT POST TEXT

export default function toggleEditPostText(postId, postText, callback) {
    validate.text(postId, 'post id')
    validate.text(postText, 'post text')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${String(context.token)}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postText })
    }

    fetch(`${import.meta.env.VITE_API_URL}/newpost/${String(postId)}/edit`, req)
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