import session from './session'
import { validate, errors } from 'com'

const { SystemError } = errors

export default function toggleFavPost(postId) {
    validate.id(postId, "post id");

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    }

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/favs`, req)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            };
        });
}