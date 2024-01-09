import { validateFunction } from "../utils/validators"
import context from './context'

export default function retrieveFavPosts(callback) {
    validateFunction(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.sessionUserId}`
        }
    }

    fetch('http://localhost:8000/fav-posts', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.message)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(favPosts => callback(null, favPosts))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}