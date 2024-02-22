import validate from './helpers/validate'
import context from './context'

function toggleFavPost(postId, callback) {
  validate.text(postId, 'post id')
  validate.function(callback, 'callback')

  const req = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${context.sessionUserId}`,
    },
  }

  fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/favs`, req)
    .then((res) => {
      if (!res.ok) {
        res
          .json()
          .then((body) => callback(new Error(body.message)))
          .catch((error) => callback(error))

        return
      }

      callback(null)
    })
    .catch((error) => callback(error))
}

export default toggleFavPost

// TODO Call API
//   db.posts.findById(postId, (error, post) => {
//     if (error) {
//       callback(error)

//       return
//     }

//     if (!post) {
//       callback(new Error('post not found'))

//       return
//     }

//     db.users.findById(this.sessionUserId, (error, user) => {
//       if (error) {
//         callback(error)

//         return
//       }

//       if (!user) {
//         callback(new Error('user not found'))

//         return
//       }

//       const index = user.favs.indexOf(postId)

//       if (index < 0) {
//         user.favs.push(post.id)
//       } else {
//         user.favs.splice(index, 1)
//       }

//       db.users.update(user, (error) => {
//         if (error) {
//           callback(error)

//           return
//         }

//         callback(null)
//       })
//     })
//   })
