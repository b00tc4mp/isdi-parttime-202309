import { validateText } from "../utils/validators"

function  toggleLikePost(postId, callback) {
    validateText(postId, 'post id')
    //TODO

    // db.posts.findById(postId, (error, post) => {
    //     if (error) {
    //         callback(error)

    //         return
    //     }

    //     if (!post) {
    //         callback(new Error('post not found'))

    //         return
    //     }

    //     const index = post.likes.indexOf(this.sessionUserId)

    //     if (index < 0)
    //         post.likes.push(this.sessionUserId)
    //     else
    //         post.likes.splice(index, 1)

    //     db.posts.update(post, error => {
    //         if (error) {
    //             callback(error)

    //             return
    //         }

    //         callback(null)
    //     })
    // })
}


export default toggleLikePost