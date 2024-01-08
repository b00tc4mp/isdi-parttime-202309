import { validateText } from "../utils/validators"
import context from "./context"

function publishPost(image, text, callback) {
    validateText(image, 'image')
    validateText(text, 'text')

    db.posts.insert(new Post(null, context.sessionUserId, image, text, []), error => {
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}

export default publishPost