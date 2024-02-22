import validate from './helpers/validate'
import context from './context'

import errors from './errors'

function toggleLikePost(postId, callback) {
  validate.text(postId, 'post id')
  validate.function(callback, 'callback')

  const req = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${context.token}`,
    },
  }

  // esta es la respuesta del servidor
  fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/likes`, req)
    .then((res) => {
      if (!res.ok) {
        res
          .json()
          .then((body) => callback(new errors[body.error](body.message)))
          .catch((error) => callback(error))

        return
      }

      callback(null)
    })
    .catch((error) => callback(error))

  // TODO Call API
  // db.posts.findById(postId, (error, post) => {
  //   if (error) {
  //     callback(error)

  //     return
  //   }

  //   if (!post) {
  //     callback(new Error('post not found'))

  //     return
  //   }

  //   const index = post.likes.indexOf(this.sessionUserId)

  //   if (index < 0) post.likes.push(this.sessionUserId)
  //   else post.likes.splice(index, 1)

  //   console.log(post.id)

  //   db.posts.update(post, (error) => {
  //     if (error) {
  //       callback(error)

  //       return
  //     }

  //     callback(null)
  //   })
  // })
}

export default toggleLikePost
