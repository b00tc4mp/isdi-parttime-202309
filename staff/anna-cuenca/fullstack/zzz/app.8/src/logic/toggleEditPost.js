import { validate, errors } from "com"
import session from './session'

//cambiar el nombre por upddatePostText


function toggleEditPost(postId, text, callback) {
    validate.id(postId, 'post id')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${session.token}`,
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({ text })
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/text`, req)
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

export default toggleEditPost
