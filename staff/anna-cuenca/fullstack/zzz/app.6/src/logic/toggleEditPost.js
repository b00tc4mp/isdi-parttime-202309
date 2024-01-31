import { validate, errors } from "com"
import context from './context'

//cambiar el nombre por upddatePostText


function toggleEditPost(postId, newText, callback) {
    validate.text(postId, 'post id')
    validate.text(newText, 'text to edit')
    validate.function(callback, 'callback')

    db.posts.findById(postId, (error, post) => {
        if (error) {
            callback(error)

            return
        }

        if (!post) {
            callback(new Error('post not found'))

            return
        }


        post.text = newText;

        db.posts.update(post, error => {
            if (error) {
                callback(error)

                return
            }
            callback(null)

        })
    })

}

export default toggleEditPost
