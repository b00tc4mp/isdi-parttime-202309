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
            db.users.insert(new User(null, name, email, password, []), error => {
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
        asyncDelay(() => {
            this.sessionUserId = null
            callback(null)
        }, 0.9)
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

    changeUserEmail(newEmail, newEmailConfirm, password) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        const user = db.users.findById(this.sessionUserId)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newEmail !== newEmailConfirm)
            throw new Error('new email and its confirmation do not match')

        user.email = newEmail

        db.users.update(user)

    }

    changeUserPassword(newPassword, newPasswordConfirm, password) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        const user = db.users.findById(this.sessionUserId)

        if (!user || user.password !== password)
            throw new Error('wrong credentials')

        if (newPassword !== newPasswordConfirm)
            throw new Error('new password and its confirmation do not match')

        user.password = newPassword

        db.users.update(user)
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
                posts.forEach(post => {
                    post.liked = post.likes.includes(this.sessionUserId)
                    db.users.findById(post.author, (error, author) => {
                        if (error) {
                            callback(error)
                            return
                        }
                        //post.author = author.name
                        post.author = {
                            name: author.name,
                            id: author.id
                        }
                        post.fav = user.favs.includes(post.id)
                        count++
                        if (count === posts.length)
                            callback(null, posts)
                    })
                })
            })
        })
    }

    /*retrieveUserFavs () {
        const user = db.users.findById(this.sessionUserId)
        return user.favs
    }*/

    /*filterFavPosts(posts) {
        const user = db.users.findById(this.sessionUserId)
        return posts.filter(post => user.favs.includes(post.id))
    }
    */
    retrieveFavPosts() {
        //TODO
        const user = db.users.findById(this.sessionUserId)

        if (!user)
            throw new Error('wrong credentials')

        const userFavPostsIds = user.favs

        const posts = db.posts.getAll()
        const favPosts = posts.filter(post => userFavPostsIds.includes(post.id))

        favPosts.forEach(post => {
            post.liked = post.likes.includes(this.sessionUserId)
            const author = db.users.findById(post.author)
            post.fav = user.favs.includes(post.id)

            post.author = {
                name: author.name,
                id: author.id
            }
        })


        return favPosts
    }

    publishPost(image, text, callback) {
        validateText(image, 'image')
        validateText(text, 'text')

        db.post.insert(new Post(null, this.sessionUserId, image, text, []), error => {
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
                callback(new Error('Post not found'))
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
                callback(new Error('Post not found'))
                return
            }

            db.users.findById(this.sessionUserId, (error, user) => {
                if (error) {
                    callback(error)
                    return
                }

                if (!user) {
                    callback(new Error('User not found'))
                    return
                }

                const index = user.favs.indexOf(postId)

                if (index < 0)
                    user.favs.push(postId)
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

            user.favs.forEach(postId => {
                db.posts.findById(postId, (error, post) => {
                    if (error) {
                        callback(error)
                        return
                    }

                    favs.push(post)
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

                                post.author = author.name
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


    //Delete antes refactoring
    deletePost(postId, callback) {
        // Eliminar los ID's de Favoritos

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

            db.posts.deleteById(post.id, error => {
                if (error) {
                    callback(error)
                    return
                }
                callback(null)
            })

        })

    }

    //Refactoring cuasifallido
    /*  NOVALEdeletePost(postId, callback) {
          // Eliminar los ID's de Favoritos
  
          validateText(postId, 'post id')
  
          db.posts.findById(postId, (error, post) => {
              if (error) {
                  callback(error)
                  return
              }
  
              if (!post) {
                  callback(new Error('Post not found'))
                  return
              }
  
              db.posts.deleteById(post.id, callback)
  
          })
      }*/
}
