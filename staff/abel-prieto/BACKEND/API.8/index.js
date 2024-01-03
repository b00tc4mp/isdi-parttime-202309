const mongoose = require('mongoose')
const { ContentError, NotFoundError,DuplicityError, CredentialsError } = require('./logic/errors')

const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")
const createPosts = require('./logic/createPosts')
const retrieveUser = require('./logic/retrieveUser')
const changeEmailUser = require('./logic/changeEmailUser')
const changePasswordUser = require('./logic/changePasswordUser')
const toggleLikePost = require('./logic/toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        // Importamos e iniciamos paquete EXPRESS
        const express = require('express')
        const server = express()

        // Hacemos que la respuesta al servidor se envíe el 'Hello API.6'
        server.get('/', (req, res) => res.send('Hello API.6'))

        // TEST IN BROWSER 'GET' in localhost:8000/hello?name=Abel&surname=Prieto
        server.get('/hello', (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`))

        // Permite convertir cualquier petición con un cuerpo .JSON en un objeto en la propiedad 'body' de la request
        const jsonBodyParser = express.json()

        // Con server.use() te permite usar un middleware a nivel global para que lo tengan todas las respuestas a peticiones al servidor y con next(), hace que continuen
        server.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*') // Permite cualquier puerto
            res.setHeader('Access-Control-Allow-Headers', '*') // Permite cualquier header
            res.setHeader('Access-Control-Allow-Methods', '*') // Permite cualquier método
    
            next()
        })

        // TEST in browser 'POST' in localhost 'REGISTER USER'
        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body
    
                registerUser(name, email, password, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof DuplicityError) {
                            error = 409
                        }
                
                        res.status(status).json({ error: error.constructor.name, message: error.message })
    
                        return
                    }
    
                    res.status(201).send()
                    // Envía código 201 de 'CREADO'
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TEST in browser 'POST' in localhost 'AUTHENTICATE USER'
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError) {
                            status = 404
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send(userId)
                    // Envía código 200 de 'OKEY'

                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TEST in browser 'GET' in localhost 'RETRIEVE USER'
        server.get('/users', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)
                // Recogemos en la cabecera el elemento solicitado en GET con el Authorization
                // Mediante el .substring() indicamos con número el carácter donde empieza el contenido/dato

                retrieveUser(userId, (error, user) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError) {
                            status = 404
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(user)
                    // Envía en formato json el usuario

                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TEST in browser 'POST' in localhost 'CHANGE EMAIL USER'
        server.post('/users/email', jsonBodyParser, (req, res) => {
            try {
                const { email, newEmail, password } = req.body

                changeEmailUser(email, newEmail, password, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError) {
                            status = 404
                        }

                        if (error instanceof CredentialsError) {
                            status = 401
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send()
                    // Envía código 200 de 'OKEY'

                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TEST in browser 'POST' in localhost 'CHANGE PASSWORD USER'
        server.post('/users/password', jsonBodyParser, (req, res) => {
            try {
                const { email, password, newPassword } = req.body

                changePasswordUser(email, password, newPassword, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError) {
                            status = 404
                        }

                        if (error instanceof CredentialsError) {
                            status = 401
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(200).send()
                    // Envía código 200 de 'OKEY'

                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TEST in browser 'POST' in localhost 'CREATE POST'
        server.post('/newpost', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)
        
                const { image, text } = req.body
        
                createPosts(userId, image, text, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof DuplicityError) {
                            status = 409
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(201).send()
                    // Envía código 201 de 'CREADO'
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // TEST in browser 'PATCH' in localhost 'TOGGLE LIKE POST'
        server.patch('/newpost/:postId/likes', (req, res) => {
            // Ponemos :postId con (:) porque express lo toma como un parámetro variable y lo mete en la request

            try {
                const userId = req.headers.authorization.substring(7)

                const { postId } = req.params
                // Con .params recoge lo que indicamos mediante los (:) de la navegación dentro de un Objeto {}

                toggleLikePost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError) {
                            status = 404
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }
            
                    res.status(204).send()
                    // Envía código 204 de 'OK' pero vacío
                })
            } catch (error) {
                let status = 500

                if (error instanceof ContentError || error instanceof TypeError) {
                    status = 406
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // Hacemos que el servidor se mantenga en escucha a través del puerto 8000 e imprima un console.log()
        server.listen(8000, () => console.log('server online'))
    })
    .catch(error => console.error(error))
