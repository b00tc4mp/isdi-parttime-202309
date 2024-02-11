import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

export default function deletePost(postId) {
    validate.id(postId, "post id");

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${session.token}`,
            'Content-Type': 'application/json'
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
}