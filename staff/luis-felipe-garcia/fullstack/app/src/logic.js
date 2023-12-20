import { validateText } from "./utils/validators"
import db from "./data/db"
import randomDelay from "./utils/randomDelay"
import { User, Post } from "./data/models"


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
            .catch(error => callback(error))
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
                    .then(userId => callback(null, userId => {
                        this.sessionUserId = userId
                        callback(null)
                    }))
                    .catch(error => callback(error))
            })
            .catch(error => callback(error))
    }

    logoutUser(callback) {
        randomDelay(() => {
            this.sessionUserId = null
            callback(null)
        })
    }

    retrieveUser(callback) {
        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            },
            body: JSON.stringify({ email, password })
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
                    .then(userId => callback(null, user))
                    .catch(error => callback(error))
            })
            .catch(error => callback(error))
    }

    changeUserEmail(newEmail, newEmailConfirm, password, callback) {
        validateText(newEmail, 'new email')
        validateText(newEmailConfirm, 'new email confirm')
        validateText(password, 'password')

        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)
                return
            }

            if (!user || user.password !== password)
                throw new Error('wrong credentials')

            if (newEmail !== newEmailConfirm)
                throw new Error('new email and its confirmation do not match')

            user.email = newEmail

            db.users.update(user)
            callback(null, user)

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

            if (!user || user.password !== password)
                throw new Error('wrong credentials')

            if (newPassword !== newPasswordConfirm)
                throw new Error('new password and its confirmation do not match')

            user.password = newPassword

            db.users.update(user, error => {
                if (error) {
                    callback(error)
                    return
                }

                callback(null)
            })

            callback(null, user)
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
    /*retrieveFavPosts() {
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
    }*/

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

    updatePostText(postId, text, callback) {
        validateText(postId, 'post id')
        validateText(text, 'text')

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)
                return
            }

            if (!post) {
                callback(new Error('Post not found'))
                return
            }

            if (post.author !== this.sessionUserId) {
                callback(new Error('Post does not belong to user'))
                return
            }

            post.text = text

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

                                //post.author = author.name
                                post.author = {
                                    name: author.name,
                                    id: author.id
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

            db.users.getAll((error, users) => {
                if (error) {
                    callback(error)
                    return
                }

                // NO HAY QUE MANEJAR EL ERROR CON USERS???

                if (!users) {
                    callback(new Error('Users not found'))
                }

                const usersWithFavs = users.filter(user => user.favs.includes(postId))
                let count = 0

                //TODO if
                if (!usersWithFavs.length) {
                    db.posts.deleteById(postId, error => {
                        if (error) {
                            callback(error)

                            return
                        }

                        callback(null)
                    })

                    return
                }

                usersWithFavs.forEach(user => {
                    const index = user.favs.indexOf(postId)
                    user.favs.splice(index, 1)

                    db.users.update(user, error => {
                        if (error) {
                            callback(error)
                            return
                        }

                        // NO HAY QUE MANEJAR EL ERROR CON USER???
                        /*if (!user) {
                            callback(new Error('user not exists'))
                            return
                        }*/

                        count++
                        if (count === usersWithFavs.length) {

                            db.posts.deleteById(post.id, error => {
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
