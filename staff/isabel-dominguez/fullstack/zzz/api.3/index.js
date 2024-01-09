const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const retrievePosts = require('./logic/retrievePosts')
const retrieveFavPosts = require('./logic/retrieveFavPosts')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toggleLikePost')
const toggleFavPost = require('./logic/toggleFavPost')
const changeEmailUser = require('./logic/changeEmailUser')
const changePasswordUser = require('./logic/changePasswordUser')
const deleteUser = require('./logic/deleteUser')
const deletePost = require('./logic/deletePost')
const updatePostText = require('./logic/updatePostText')
// const commentPost = require('./logic/commentPost')
const { SystemError, NotFoundError, ContentError, DuplicityError } = require('./utils/errors')

const server = express()

server.get('/', (req, res) => res.send('Hello, World!'))

const jsonBodyParser = express.json() //Te permite convertir cualquier petición que le enviemos al servidor con un cuerpo json lo convierte a objeto en la propiedad body de la request(req). Es un middleware.

// Middleware para analizar cuerpos JSON
server.use(express.json())

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next()
})

//REGISTER
server.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, password } = req.body

        registerUser(name, email, password, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof DuplicityError)
                    status = 409

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//LOGIN
server.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof DuplicityError)
                    status = 409
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(userId)
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//RETRIEVE USER
server.get('/users', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)// El ID está a partir del carácter 7 del cabecero "-H 'Authorization: Bearer 5gbocg2tsfs0'"

        retrieveUser(userId, (error, user) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404 // Usuario no encontrado
                else if (error instanceof ContentError)
                    status = 406 // Contenido no aceptable

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(user)
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// RETRIEVE POST
server.get('/posts', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        retrievePosts(userId, (error, posts) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(posts)
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// RETRIEVE FAV POST
server.get('/fav-posts', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        retrieveFavPosts(userId, (error, favPosts) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(favPosts)
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//CREATE POST
server.post('/posts', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { image, text } = req.body

        createPost(userId, image, text, error => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).json({ message: 'You have created a new post!.', userId }).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//TOGGLE LIKE POST
server.patch('/posts/:postId/likes', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params

        toggleLikePost(userId, postId, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(204).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// TOGGLE FAV POST
server.patch('/posts/:postId/favs', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params

        toggleFavPost(userId, postId, error => {
            if (error) {
                let status = 400

                if (error instanceof SystemError)
                    status = 500
                else if (error instanceof NotFoundError)
                    status = 404

                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }

            res.status(204).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// CHANGE EMAIL USER
server.post('/users/email', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { email, newEmail, confirmNewEmail } = req.body

        changeEmailUser(userId, email, newEmail, confirmNewEmail, (error, userId) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError) {
                    status = 404
                } else if (error instanceof ContentError) {
                    status = 406
                } else if (error instanceof SystemError) {
                    status = 500
                } else if (error instanceof DuplicityError) {
                    status = 409 // Conflicto, por ejemplo, nuevo correo igual al existente
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).json({ message: 'Email changed successfully.', userId }).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// CHANGE PASSWORD USER
server.post('/users/password', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { password, newPassword, confirmNewPassword } = req.body

        changePasswordUser(userId, password, newPassword, confirmNewPassword, (error, userId) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError) {
                    status = 404
                } else if (error instanceof ContentError) {
                    status = 406
                } else if (error instanceof SystemError) {
                    status = 500
                } else if (error instanceof DuplicityError) {
                    status = 409
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }

            res.status(200).json({ message: 'Password changed successfully.', userId }).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// DELETE USER
server.delete('/users', jsonBodyParser, (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)

        const { password } = req.body

        deleteUser(userId, password, (error, userId) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError) {
                    status = 404
                } else if (error instanceof ContentError) {
                    status = 406
                } else if (error instanceof SystemError) {
                    status = 500
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(200).json({ message: 'User deleted successfully.', userId }).send()
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// DELETE POST
server.delete('/posts/:postId', jsonBodyParser, (req, res) => {
    try {
        const postId = req.params.postId

        deletePost(postId, (error, deletedPostId) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError) {
                    status = 404
                } else if (error instanceof ContentError) {
                    status = 406
                } else if (error instanceof SystemError) {
                    status = 500
                }

                return res.status(status).json({ error: error.constructor.name, message: error.message })
            }

            res.status(200).json({ message: 'Post deleted successfully.', deletedPostId })
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

//UPDATE POST TEXT
server.put('/posts/:postId', (req, res) => {
    try {
        const userId = req.headers.authorization.substring(7)
        const postId = req.params.postId
        const { text } = req.body

        updatePostText(postId, text, userId, (error) => {
            if (error) {
                let status = 400

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
                return
            }

            res.json({ message: 'Text updated successfully' })
        })
    } catch (error) {
        let status = 400

        if (error instanceof ContentError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
})

// //COMMENTS POSTS
// server.post('/posts/:postId/comments', (req, res) => {
//     try {
//         const userId = req.headers.authorization.substring(7)
//         const postId = req.params.postId
//         const { comment } = req.body

//         commentPost(postId, comment, userId, (error) => {
//             if (error) {
//                 let status = 400

//                 if (error instanceof NotFoundError)
//                     status = 404
//                 else if (error instanceof ContentError)
//                     status = 406

//                 res.status(status).json({ error: error.constructor.name, message: error.message })
//                 return
//             }

//             res.json({ message: 'Comment added successfully' })
//         })
//     } catch (error) {
//         let status = 400

//         if (error instanceof ContentError)
//             status = 406

//         res.status(status).json({ error: error.constructor.name, message: error.message })
//     }
// })


server.listen(8000, () => console.log('server is up'))