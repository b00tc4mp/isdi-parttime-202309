import { validateText } from './utils/validators'
import db from './data/db'
import { User, Post } from './data/models'
import randomDelay from './utils/randomDelay'

class Logic {
  constructor() {
    this.sessionUserId = null
  }

  registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }

    fetch('http://localhost:8000/users', req)

      .then(res => {
        if (!res.ok) {
          res.json()
            .then(body => callback(new Error(body.message)))
            .catch(error => callback(error))

          return
        }
        callback(null)

      })
      .catch(error => console.error(error)) // este error es por si el servidor está caido
  }

  loginUser(email, password, callback) {
    validateText(email, 'email')
    validateText(password, 'password')

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }

    fetch('http://localhost:8000/users/auth', req)
      .then(res => {
        if (!res.ok) {
          res.json()
            .then(body => callback(new Error(body.message)))
            .catch(error => callback(error))

          return
        }

        res.json()
          .then(userId => {
            this.sessionUserId = userId

            callback(null)
          })
          .catch(error => callback(error))
      })
      .catch(error => callback(error))

  }

  logoutUser(callback) {
    randomDelay(() => {
      this.sessionUserId = null

      callback(null)
    }, 0.9)
  }

  retrieveUser(callback) {
    const req = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.sessionUserId}`
      }

    }

    fetch('http://localhost:8000/users', req)

      .then(res => {
        if (!res.ok) {
          res.json()
            .then(body => callback(new Error(body.message)))
            .catch(error => callback(error))

          return
        }

        res.json()
          .then(user => callback(null, user))
          .catch(error => callback(error))

      })
      .catch(error => callback(error)) // este error es
  }

  // YA FUNCIONA :D
  changeUserEmail(newEmail, newEmailConfirm, password, callback) {
    validateText(newEmail, "new email")
    validateText(newEmailConfirm, "new email confirm")
    validateText(password, "password")

    db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user || user.password !== password) {
        callback(new Error("wrong credentials"))

        return
      }

      if (newEmail !== newEmailConfirm) {
        callback(new Error("new email and its confirmation do not match"))

        return
      }

      user.email = newEmail

      db.users.update(user, (error) => {
        if (error) {
          callback(error)

          return
        }

        callback(null) // por qué llegados a este punto, el valor de callback es undefined??
      })
    })
  }


  changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
    validateText(newPassword, "new password")
    validateText(newPasswordConfirm, "new password confirm")
    validateText(password, "password")

    db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)
        return
      }

      if (!user || user.password !== password) {
        callback(new Error("Wrong credentials"))
        return
      }

      if (newPassword !== newPasswordConfirm) {
        callback(new Error("New password and its confirmation do not match"))
        return
      }
      user.password = newPassword
      db.users.update(user, (error) => {
        if (error) {
          callback(error)
          return
        }
        callback(null)
      })

    })
  }







  retrievePosts(callback) {
    const req = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.sessionUserId}`
      }
    }

    fetch('http://localhost:8000/posts', req)

      .then(res => {
        if (!res.ok) {
          res.json()
            .then(body => callback(new Error(body.message)))
            .catch(error => callback(error))

          return
        }

        res.json()
          .then(posts => callback(null, posts))
          .catch(error => callback(error))

      })
      .catch(error => console.error(error)) // este error es

  }

  publishPost(image, text, callback) {
    validateText(image, 'image')
    validateText(text, 'text')

    db.posts.insert(new Post(null, this.sessionUserId, image, text, []), error => {
      if (error) {
        callback(error)

        return
      }

      callback(null)
    })
  }

  toggleLikePost(postId, callback) {
    validateText(postId, 'post id')

    db.posts.findById(postId, (error, post) => {
      if (error) {
        callback(error)

        return
      }

      if (!post) {
        callback(new Error('post not found'))

        return
      }

      const index = post.likes.indexOf(this.sessionUserId)

      if (index < 0)
        post.likes.push(this.sessionUserId)
      else
        post.likes.splice(index, 1)

      db.posts.update(post, error => {
        if (error) {
          callback(error)

          return
        }

        callback(null)
      })
    })

  }

  toggleFavPost(postId, callback) {
    validateText(postId, 'post id')

    db.posts.findById(postId, (error, post) => {
      if (error) {
        callback(error)

        return
      }

      if (!post) {
        callback(new Error('post not found'))

        return
      }

      db.users.findById(this.sessionUserId, (error, user) => {
        if (error) {
          callback(error)

          return
        }

        if (!user) {
          callback(new Error('user not found'))

          return
        }

        const index = user.favs.indexOf(post.id)

        if (index < 0)
          user.favs.push(post.id)
        else
          user.favs.splice(index, 1)

        db.users.update(user, error => {
          if (error) {
            callback(error)

            return
          }

          callback(null)
        })
      })
    })

  }

  toggleEditPost(postId, newText, callback) {
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

  retrieveFavPosts(callback) {
    db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user) {
        callback(new Error('user not found'))

        return
      }

      const favs = []

      let count = 0

      if (!user.favs.length) {
        callback(null, favs)

        return
      }

      user.favs.forEach((postId, index) => {
        db.posts.findById(postId, (error, post) => {
          if (error) {
            callback(error)

            return
          }

          favs[index] = post

          count++

          if (count === user.favs.length) {
            let count2 = 0

            favs.forEach(post => {
              post.liked = post.likes.includes(this.sessionUserId)

              db.users.findById(post.author, (error, author) => {
                if (error) {
                  callback(error)

                  return
                }

                // si no pongo esto así, no tengo el id y no puedo pintar el edit

                post.author = {
                  email: author.email,
                  id: author.id,
                  name: author.name
                }

                post.fav = user.favs.includes(post.id)

                count2++

                if (count2 === favs.length) callback(null, favs)
              })
            })
          }
        })
      })

    })
  }





  deletePost(postId, callback) {
    validateText(postId, 'post id')
    db.posts.findById(postId, (error, post) => {
      if (error) {
        callback(error)
        return
      }
      if (!post) {
        callback(new Error('post not found'))

        return
      }
      db.users.getAll((error, users) => {
        if (error) {
          callback(error)

          return
        }

        const usersWithFav = users.filter((user) => user.favs.includes(postId))
        let count = 0

        if (!usersWithFav.length) {
          db.posts.deleteById(post.id, (error) => { // Eliminar el post por su ID en la base de datos
            if (error) {
              callback(error)

              return
            }

            callback(null)
          })

          return
        }
        usersWithFav.forEach(user => {

          const index = user.favs.indexOf(postId)

          user.favs.splice(index, 1)

          db.users.update(user, error => {
            if (error) {
              callback(error)

              return
            }

            count++

            if (count === usersWithFav.length) {
              db.posts.deleteById(post.id, (error) => {
                if (error) {
                  callback(error)

                  return
                }

                callback(null)
              })
            }
          })
        })
      })
    })
  }


}



const logic = new Logic

export default logic




