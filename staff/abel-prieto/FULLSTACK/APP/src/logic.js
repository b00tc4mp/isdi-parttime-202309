import { validateFunction, validateText } from "./utils/validators"
import randomDelay from "./utils/randomDelay"

import { User, Post } from "./data/models"
import db from "./data/db"

// CLASS - LOGIC

class Logic {
    constructor() {
        this.sessionUserId = null
    }

    // [ - - - - - USERS - - - - - ]

    // REGISTER USER
    registerUser(name, email, password, callback) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')
        validateFunction(callback, 'callback')
    
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

    // LOGIN & AUTHENTICATE USER
    loginUser(email, password, callback) {
        validateText(email, 'email')
        validateText(password, 'password')
        validateFunction(callback, 'callback')

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

    // LOGOUT USER
    logoutUser(callback) {
        validateFunction(callback, 'callback')

        randomDelay(() => {
            this.sessionUserId = null
    
            callback(null)
        }, 0.9)
    }
    
    // LOGIN LOGIC
    retrieveUser(callback) {
        validateFunction(callback, 'callback')

        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
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
            .catch(error => callback(error))
    }
    
    // CHECK CHANGE EMAIL 
    changeUserEmail(newEmail, confirmNewEmail, password, callback) {
        validateText(newEmail, 'new email')
        validateText(confirmNewEmail, 'new email confirm')
        validateText(password, 'password')
        validateFunction(callback, 'callback')
    
        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user || user.password !== password) {
                callback(new Error('wrong credentials'))

                return
            }
    
            if (newEmail !== confirmNewEmail) {
                callback(new Error('New email and your confirm doesnt match each other'))
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
    
    // CHECK CHANGE PASSWORD 
    changeUserPassword(password, newPassword, againNewPassword, callback) {
        validateText(password, 'password')
        validateText(newPassword, 'new password')
        validateText(againNewPassword, 'repeat password')
        validateFunction(callback, 'callback')

        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user || user.password !== password) {
                callback(new Error('wrong credentials'))

                return
            }

            if (newPassword !== againNewPassword) {
                callback(new Error('New pass and his confirmation are not correct. Try again') )

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

    // [ - - - - - POSTS - - - - - ]

    // PUBLISH ALL POSTS
    publishPost(image, text, callback) {
        validateText(image, 'image')
        validateText(text, 'text')
        validateFunction(callback, 'callback')
        
        db.posts.insert(new Post(null, this.sessionUserId, image, text, [], []), error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    }
    
    // DELETE POST (PENDIENTE)
    deletePost(postId, callback) {
        validateText(postId, 'post id')
        validateFunction(callback, 'callback')

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)

                return
            }

            if (!post) {
                callback(new Error('post not found'))

                return
            }

            // 1. Filtrado por usuarios con post.id en favs
            // 2. Hacer forEach con ese ARRAY

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
                            // TODO (DELETE POST - DONE)
                            db.posts.deleteById(postId, error => {
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
    
    // RETRIEVE POSTS
    retrievePosts(callback) {
        validateFunction(callback, 'callback')

        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch('http://localhost:8000/newpost', req)
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
            .catch(error => callback(error))
    }

    // RETRIEVE FAV SESSION POSTS
    retrieveFavUserPosts(callback) {
        validateFunction(callback, 'callback')

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
                // Si hay error, pasa "null" - Si no hay, devuelve los favs del user

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

                                post.author = {
                                    email: author.email,
                                    id: author.id
                                }

                                post.fav = user.favs.includes(post.id)

                                count2++

                                if (count2 === favs.length) {
                                    callback(null, favs)
                                    // Si hay error, tira "null" - Si todo OK, retorna al forEach los "favs"
                                }
                            })
                        })
                    }

                })
            })
        })
    }

    // UPDATE ALL POSTS
    toggleLikePost(postId, callback) {
        validateText(postId, 'post id')
        validateFunction(callback, 'callback')

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)

                return
            }
            
            if (!post) {
                callback(new Error('post not found'))

                return
            }

            const likeIndex = post.likes.indexOf(this.sessionUserId)

            if (likeIndex < 0) {
                post.likes.push(this.sessionUserId)
            } else {
                post.likes.splice(likeIndex, 1)
            }

            db.posts.update(post, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
                // Callback porque es la última operación de la función
            })
        })
    }

    // FAV BUTTON
    toggleFavPost(postId, callback) {
        validateText(postId, 'post id')
        validateFunction(callback, 'callback')

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
        
                // const index = user.favs.indexOf(post.id)
                const index = user.favs.indexOf(postId)
        
                if (index < 0) {
                    user.favs.push(post.id)
                } else {
                    user.favs.splice(index, 1)
                }
        
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

    // EDIT POST TEXT
    toggleEditPostText(postId, postText, callback) {
        validateText(postId, 'post id')
        validateText(postText, 'texts post')
        validateFunction(callback, 'callback')

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)

                return
            }   

            if (!post) {
                callback(new Error('post not found'))
            
                return
            }
            
            post.text = postText

            db.posts.update(post, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    }

    // COMMENT TEXT POSTS
    toggleCommentPostText(postId, comment, callback) {
        validateText(postId, "post id")
        validateText(comment, "comment")
        validateFunction(callback, 'callback')

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)

                return
            }   

            if (!post) {
                callback(new Error('post not found'))
            
                return
            }
            
            post.coments.push(comment);


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
// Declaramos la instancia de Logic en una variable y la exportamos
