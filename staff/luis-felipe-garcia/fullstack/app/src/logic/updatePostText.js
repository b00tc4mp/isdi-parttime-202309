import validate from "./helpers/validate"

function updatePostText(postId, text, callback) {
    validate.text(postId, 'post id')
    validate.text(text, 'text')
    validate.function(callback, 'callback')
    //TODO
    // db.posts.findById(postId, (error, post) => {
    //     if (error) {
    //         callback(error)
    //         return
    //     }

    //     if (!post) {
    //         callback(new Error('Post not found'))
    //         return
    //     }

    //     if (post.author !== this.sessionUserId) {
    //         callback(new Error('Post does not belong to user'))
    //         return
    //     }

    //     post.text = text

    //     db.posts.update(post, error => {
    //         if (error) {
    //             callback(error)
    //             return
    //         }

    //         callback(null)
    //     })
    // })
}

export default updatePostText