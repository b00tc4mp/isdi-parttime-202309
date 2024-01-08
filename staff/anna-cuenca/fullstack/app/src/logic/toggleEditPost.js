import { validateText } from "../utils/validators"

//cambiar el nombre por upddatePostText


function toggleEditPost(postId, newText, callback) {
    validateText(newText, 'text to edit')

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
