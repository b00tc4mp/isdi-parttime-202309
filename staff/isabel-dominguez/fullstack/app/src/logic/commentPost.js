import { validateText, validateFunction } from "../utils/validators"
import context from './context'

export default function commentPost(PostId, comment, callback) {
    validateText(PostId, 'post id')
    validateText(comment, 'comment')
    validateFunction(callback, 'callback')

    // const req = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${context.sessionUserId}`
    //     },
    //     body: JSON.stringify({
    //         postId,
    //         comment
    //     })
    // }

    // fetch(`http://localhost:8000/posts/${postId}/comments`, req)
    //     .then(res => {
    //         if (!res.ok) {
    //             res.json()
    //                 .then(body => callback(new Error(body.message)))
    //                 .catch(error => callback(error))

    //             return
    //         }

    //         callback(null)
    //     })
    //     .catch(error => callback(error))
}