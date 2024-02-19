import { validate } from 'com'

function updatePostText(postId, text, callback) {
  validate.text(postId, 'post id')
  validate.text(text)
  validate.function(callback, 'callback')

  // db.posts.findById(postId, (error, post) => {
  //   if (error) {
  //     callback(error)

  //     return
  //   }
  //   if (!post) {
  //     callback(new Error('post not found'))

  //     return
  //   }

  //   if (post.author !== this.sessionUserId) {
  //     callback(new Error('this post does not belong to the user'))
  //   }

  //   post.text = text

  //   db.posts.update(post, (error) => {
  //     if (error) {
  //       callback(error)

  //       return
  //     }

  //     callback(null)
  //   })
  // })
}

export default updatePostText
