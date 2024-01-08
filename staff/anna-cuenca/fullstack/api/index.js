// aqui montamos un server rápido
const mongoose = require('mongoose')
const express = require('express')

const registerUser = require('./logic/registerUser') // el requiere es como el input
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const changeEmailUser = require('./logic/changeEmailUser')
const changePasswordUser = require('./logic/changePasswordUser')
const createPost = require('./logic/createPost')
const deletePost = require('./logic/deletePost')
const editTextPost = require('./logic/editTextPost')
const retrievePosts = require('./logic/retrievePosts')
const toggleLikePost = require('./logic/toogleLikePost')
const toggleFavPost = require('./logic/toggleFavPost')
const { SystemError, NotFoundError, ContentError, DuplicityError, CredentialsError, TypeError } = require('./logic/errors')



mongoose.connect('mongodb://127.0.0.1:27017/test') //hagola conexión con moongose

    .then(() => {

        const server = express()

        // server escucha una petición get, en la ruta por defecto y en esta ruta recibiremos una peticion(req) y
        // un objeto para responder (res)
        // si nos piden esta ruta enviamos un mensaje de Hello world, que por defecto será contenido en html
        server.get('/', (req, res) => res.send('Hello world'))

        // abrimos el puerto 8000 y enviamos un chivato para que nos avise de que ha arrancado
        //ahora vamos a montar una ruta, la / es la ruta raíz, vamos a hacer como páginas
        // server.get('/hello', (req, res) => res.send('Hello its me'))
        //ahora lo que queremos es enviarle nuestro nombre (seria un Query string) y que se muestre en la pagina
        // esto se hace con la req, todos los parámetros que enviemos aqui, se pueden recoger
        // esto seria hacer un TEST in browser GET localhost:8000/hello?name=Anna&surname=Cuenca
        server.get('/hello', (req, res) => res.send(`Hello its, ${req.query.name} ${req.query.surname}`))
        // pero para que te salga, en el navegador tienes que darle esos parámetros de esta manera:
        //localhost:8000/hello?name=Anna&surname=Cuenca
        // esto seria hacer un TEST in browser GET localhost:8000/register?name=Anna+Cuenca&email=a@cuenca.com&password=123
        //server.get('/register', (req, res) => res.send(`Hello its, ${req.query.name} ${req.query.email} ${req.query.password}`))
        // esto es un parseador, lo necesitamos para que en el body, nos aparezca la información en forma de objeto
        // y nos lo pone como propiedad e la req.body
        const jsonBodyParser = express.json()

        // essto es un middlewhere que se va a ejecutar antes que cualquier petición
        //aqui añaddimos las cabeceras que permiten al cliente (al navegador), los accesos desde cualquier servidor
        server.use((req, res, next) => {
            // en la respuesta se ponen los headers que tocan
            // le decimos al cliente que nos puede llamar desde cualquier origen.
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Headers', '*')
            res.setHeader('Access-Control-Allow-Methods', '*')
            next() // con esto, le decimos que primero pasará por el res.setHeader, luego sigue su camino
        })







        //usar el metodo POST para hacer el registro
        server.post('/users', jsonBodyParser, (req, res) => {
            const { name, email, password } = req.body //queremos que nos devuelva la respuesta en el body
            try {
                registerUser(name, email, password, error => {
                    if (error) {
                        // no hacemos un callback(error), le indicamos al navegador el tipo de error en forma de respuesta (res)
                        let status = 500
                        if (error instanceof DuplicityError)
                            status = 409
                        res.status(status).json({ error: error.constructor.name, message: error.message })
                        return
                    }
                    res.status(201).send() //todo ha ido bien, se lo indicamos al navegador
                })
            } catch (error) {
                let status = 500
                if (error instanceof ContentError || error instanceof TypeError)
                    status = 406
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Authenticate User
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body
                authenticateUser(email, password, (error, userId) => {
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

        // Retrieve User
        server.get('/users', (req, res) => { //no hay un jsonBodyParser porque no enviamos nada en el body, enviamos una cabecera con el id
            try {
                const userId = req.headers.authorization.substring(7)
                retrieveUser(userId, (error, user) => {
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


        // createPost
        server.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)
                const { image, text } = req.body
                createPost(userId, image, text, error => {
                    if (error) {
                        let status = 400
                        if (error instanceof SystemError)
                            status = 500
                        else if (error instanceof NotFoundError)
                            status = 404
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

        // toggleLikePost

        server.patch('/posts/:postId/likes', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { postId } = req.params
                toggleLikePost(userId, postId, error => {
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

        // toggleFavPosts

        server.patch('/users/:userId/favs', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { postId } = req.body

                toggleFavPost(postId, userId, error => {
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

        // changeEmailUser

        server.patch('/users/:userId/email', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { email, newEmail, repeatNewEmail } = req.body

                changeEmailUser(userId, email, newEmail, repeatNewEmail, error => {
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

                if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // changePasswordUser

        server.patch('/users/:userId/password', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { password, newPassword, repeatNewPassword } = req.body

                changePasswordUser(userId, password, newPassword, repeatNewPassword, error => {
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

                if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        // edit text post

        server.patch('/posts/:postId/text', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { postId, text } = req.body

                editTextPost(userId, postId, text, error => {
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

                if (error instanceof ContentError)
                    status = 406

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })


        // retrievePosts

        // Retrieve posts

        server.get('/posts', (req, res) => { //no hay un jsonBodyParser porque no enviamos nada en el body, enviamos una cabecera con el id
            try {
                const userId = req.headers.authorization.substring(7)

                retrievePosts(userId, (error, posts) => {
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

        // deletePost

        server.delete('/posts/:postId', (req, res) => {
            try {
                const userId = req.headers.authorization.substring(7)

                const { postId } = req.params

                deletePost(userId, postId, error => {
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

        server.listen(8000, () => console.log('server is up'))

    })
    .catch(error => console.error(error))