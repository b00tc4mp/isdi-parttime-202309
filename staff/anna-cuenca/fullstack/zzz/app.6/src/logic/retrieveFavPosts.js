import context from "./context"
import { validate, errors } from "com"

function retrieveFavPosts(callback) {
    validate.function(callback, 'callback')
    const req = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${context.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/favs`, req)

        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new errors[body.error](body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(posts => callback(null, posts))
                .catch(error => callback(error))

        })
        .catch(error => console.error(error)) // este error es

}

export default retrieveFavPosts