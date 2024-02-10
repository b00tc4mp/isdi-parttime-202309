import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

export default function commentPost(userId, postId, comment) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(comment, 'text')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${session.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ comment })
    }

    return fetch(`${import.meta.env.VITE_API_URL}/post/${postId}/comments`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
}