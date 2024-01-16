import { validateText } from './utils/validators'
import randomDelay from './utils/randomDelay'
import db from './data/db'
import { User, Post } from './data/models'

class Logic {
  constructor() {
    this.sessionUserId = null
  }

  registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')

    db.users.findByEmail(email, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (user) {
        callback(new Error('user already exists'))

        return
      }

      db.users.insert(new User(null, name, email, password, []), (error) => {
        if (error) {
          callback(error)

          return
        }

        callback(null)
      })
    })
  }

  loginUser(email, password, callback) {
    validateText(email, 'email')
    validateText(password, 'password')

    db.users.findByEmail(email, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user || user.password !== password) {
        callback(new Error('wrong credentials'))

        return
      }

      this.sessionUserId = user.id

      callback(null)
    })
  }

  logoutUser(callback) {
    randomDelay(() => {
      this.sessionUserId = null

      callback(null)
    })
  }

  retrieveUser(callback) {
    db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user) {
        callback(new Error('user not found'))
      }

      delete user.password

      callback(null, user)
    })
  }

  changeUserEmail(newEmail, newEmailConfirm, password, callback) {
    validateText(newEmail, 'email')
    validateText(newEmailConfirm, 'new email confirm')
    validateText(password, 'password')

    const user = db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user || user.password !== password) {
        callback(new Error('wrong credentials'))

        return
      }

      if (newEmail !== newEmailConfirm) {
        callback(new Error('emails do not match'))
      }

      user.email = newEmail

      db.users.update(user, (error) => {
        if (error) {
          callback(error)

          return
        }

        callback(null)
      })
    })
  }

  changeUserPassword(password, newPassword, newPasswordConfirm) {
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(newPasswordConfirm, 'new password confirm')

    db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user || user.password !== password) {
        callback(new Error('wrong credentials'))

        return
      }

      if (!newPassword !== newPasswordConfirm) {
        callback(new Error('new password and its confirmation do not match'))

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
    db.users.findById(this.sessionUserId, (error, user) => {
      if (error) {
        callback(error)

        return
      }

      if (!user) {
        callback(new Error('user not found'))

        return
      }

      const posts = db.posts.getAll((error, posts) => {
        if (error) {
          callback(error)

          return
        }

        let count = 0

        posts.forEach((post) => {
          post.liked = post.likes.includes(this.sessionUserId)

          db.users.findById(post.author, (error, author) => {
            if (error) {
              callback(error)

              return
            }

            post.author = {
              email: author.email,
              name: author.name,
              id: author.id,
            }
            post.fav = user.favs.includes(post.id)

            count++

            if (count === posts.length) callback(null, posts)
          })
        })
      })
    })
  }

  publishPost(image, text, callback) {
    validateText(image, 'image')
    validateText(text, 'text')

    db.posts.insert(
      new Post(null, this.sessionUserId, image, text, []),
      (error) => {
        if (error) {
          callback(error)

          return
        }

        callback(null)
      }
    )
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

      if (index < 0) post.likes.push(this.sessionUserId)
      else post.likes.splice(index, 1)

      console.log(post.id)

      db.posts.update(post, (error) => {
        if (error) {
          callback(error)

          return
        }

        callback(null)
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
          db.posts.deleteById(postId, (error) => {
            if (error) {
              callback(error)

              return
            }
            callback(null)
          })

          return
        }

        usersWithFav.forEach((user) => {
          const index = user.favs.indexOf(postId)

          user.favs.splice(index, 1)

          db.users.update(user, (error) => {
            if (error) {
              callback(error)

              return
            }

            count++

            if (count === usersWithFav.length) {
              db.posts.deleteById(postId, (error) => {
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

  updatePostText(postId, text, callback) {
    validateText(postId, 'post id')
    validateText(text, 'text')

    db.posts.findById(postId, (error, post) => {
      if (error) {
        callback(error)

        return
      }
      if (!post) {
        callback(new Error('post not found'))

        return
      }

      if (post.author !== this.sessionUserId) {
        callback(new Error('this post does not belong to the user'))
      }

      post.text = text

      db.posts.update(post, (error) => {
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

        const index = user.favs.indexOf(postId)

        if (index < 0) {
          user.favs.push(post.id)
        } else {
          user.favs.splice(index, 1)
        }

        db.users.update(user, (error) => {
          if (error) {
            callback(error)

            return
          }

          callback(null)
        })
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

      // Option a: This method returns the posts in the order in which they were published:
      /* const favs = db.posts.getAll().filter(post => (sessionUser.favs.includes(post.id))) */

      // Option b: This method returns the posts in the order in which we favourited them:
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

            favs.forEach((post) => {
              post.liked = post.likes.includes(this.sessionUserId)

              db.users.findById(post.author, (error, author) => {
                if (error) {
                  callback(error)

                  return
                }

                post.author = {
                  name: author.name,
                  email: author.email,
                  id: author.id,
                }

                post.fav = user.favs.includes(post.id)

                count2++

                if (count2 === favs.length) {
                  callback(null, favs)
                }
              })
            })
          }
        })
      })
    })
  }
}

const logic = new Logic()

export default logic
