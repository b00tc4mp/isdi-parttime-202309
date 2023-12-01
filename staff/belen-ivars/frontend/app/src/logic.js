import { validateText } from "./utils/validators"
import db from "./data/db"
import { User, Post } from "./data/models"
import randomDelay from "./utils/randomDelay"

class Logic {
    constructor() {
        this.sessionUserId = null
    }

    registerUser(name, email, password, callback) {
        validateText(name, 'Name')
        validateText(email, 'Email')
        validateText(password, 'Password')

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
        validateText(email, 'Email')
        validateText(password, 'Password')

        db.users.findByEmail(email, (error, user) => {
            if (error) {
                callback(error)

                return
            }
            if (!user || user.password !== password) {

                callback(new Error('Wrong credentials'))

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

                callback(new Error('User not found'))

                return
            }
            delete user.password

            callback(null, user)
        })
    }
    //TODO
    changeUserEmail(newEmail, newEmailConfirm, password, callback) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }
            if (!user || user.password !== password) {

                callback(new Error('Wrong credentials'))

                return
            }
            if (newEmail !== newEmailConfirm) {

                callback(new Error('new email and its confirmation do not match'))

                return
            }

            user.email = newEmail

            db.users.update(user, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    }

    changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
        validateText(newPassword, 'new password')
        validateText(newPasswordConfirm, 'new password confirm')
        validateText(password, 'password')

        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }
            if (!user || user.password !== password) {

                callback(new Error('Wrong credentials'))

                return
            }
            if (newPassword !== newPasswordConfirm) {

                callback(new Error('new password and its confirmation do not match'))

                return
            }

            user.password = newPassword

            db.users.update(user, error => {
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

                posts.forEach(post => {
                    post.liked = post.likes.includes(this.sessionUserId)

                    db.users.findById(post.author, (error, author) => {
                        if (error) {
                            callback(error)

                            return
                        }

                        post.author = {
                            email: author.email,
                            id: author.id,
                            name: author.name
                        }

                        post.fav = user.favs.includes(post.id)

                        count++

                        if (count === posts.length) {

                            callback(null, posts)
                        }
                    })
                })
            })
        })

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

                const index = user.favs.indexOf(postId)

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
                    db.posts.deleteById(postId, error => {
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

                            db.posts.deleteById(postId, error => { // Abel ho té diferent: (post.id, (error, post) =>)
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

                                post.author = {
                                    email: author.email,
                                    id: author.id,
                                    name: author.name

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

const logic = new Logic

export default logic