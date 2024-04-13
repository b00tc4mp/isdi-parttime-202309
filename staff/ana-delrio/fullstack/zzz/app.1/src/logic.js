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
                // si todo va bien irá por ese camino 
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }
                callback(null)

            })
            // está ruta la tomaríamos si el servidor se cayera por ejemplo, error de conexión
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

        // esto es un endpoint, a donde estamos llamando
        fetch('http://localhost:8000/users/auth', req)
            .then(res => {
                // si todo va bien irá por ese camino 
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
        })
    }

    retrieveUser(callback) {
        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch('http://localhost:8000/users', req)
            .then(res => {
                console.log(req)
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
            .catch(error => callback(error))
    }

    // TODO
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

    // TODO
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
        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch('http://localhost:8000/posts', req)
            .then(res => {
                console.log(req)
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
            .catch(error => callback(error))

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
                callback(new Error('post does not belong to user'))

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


}

const logic = new Logic

export default logic