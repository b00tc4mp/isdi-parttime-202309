const mongoose = require('mongoose')
const express = require('express')
const logic = require('./logic')
const { NotFoundError, ContentError, DuplicityError, CredentialsError } = require('./logic/errors')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        const server = express()

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

                logic.registerUser(name, email, password, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //LOGIN
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404
                        else if (error instanceof CredentialsError)
                            status = 401

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(userId)
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //RETRIEVE USER
        server.get('/users', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)// El ID está a partir del carácter 7 del cabecero "-H 'Authorization: Bearer 5gbocg2tsfs0'"

                logic.retrieveUser(userId, (error, user) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(user)
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // RETRIEVE POSTS
        server.get('/posts', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                logic.retrievePosts(userId, (error, posts) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // RETRIEVE FAV POST
        server.get('/fav-posts', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                logic.retrieveFavPosts(userId, (error, favPosts) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(favPosts)
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //CREATE POST
        server.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { image, text } = req.body

                logic.createPost(userId, image, text, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(201).json({ message: 'You have created a new post!.', userId }).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //TOGGLE LIKE POST
        server.patch('/posts/:postId/likes', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { postId } = req.params

                logic.toggleLikePost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TOGGLE FAV POST
        server.patch('/posts/:postId/favs', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { postId } = req.params

                logic.toggleFavPost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // CHANGE EMAIL USER
        server.post('/users/email', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { newEmail, confirmNewEmail, password } = req.body

                logic.changeUserEmail(userId, newEmail, confirmNewEmail, password, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404
                        else if (error instanceof CredentialsError)
                            status = 401
                        else if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // CHANGE PASSWORD USER
        server.post('/users/password', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { password, newPassword, confirmNewPassword } = req.body

                logic.changeUserPassword(userId, password, newPassword, confirmNewPassword, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404
                        else if (error instanceof CredentialsError)
                            status = 401
                        else if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // DELETE USER
        server.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                logic.deleteUser(userId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // DELETE POST
        server.delete('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const postId = req.params.postId

                logic.deletePost(postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //UPDATE POST TEXT
        server.put('/posts/:postId', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)
                const postId = req.params.postId
                const { text } = req.body

                logic.updatePostText(postId, text, userId, (error) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json({ message: 'Text updated successfully' })
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.listen(8000, () => console.log('server is up'))
    })
    .catch(error => console.error(error))