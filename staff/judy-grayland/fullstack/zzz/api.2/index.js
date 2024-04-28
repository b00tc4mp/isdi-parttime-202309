const mongoose = require('mongoose')
const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const retrievePosts = require('./logic/retrievePosts')
const retrieveFavPosts = require('./logic/retrieveFavPosts')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toggleLikePost')
const toggleFavPost = require('./logic/toggleFavPost')
const {
  SystemError,
  NotFoundError,
  ContentError,
  DuplicityError,
  CredentialsError,
} = require('./logic/errors')

// antes de montar el server, conectamos con mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    const server = express()

    server.get('/', (req, res) => res.send('hello world'))

    const jsonBodyParser = express.json()

    server.use((req, res, next) => {
      // le decimos al navegador que nos puede llamar desde cualquier origen:
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Headers', '*')
      res.setHeader('Access-Control-Allow-Methods', '*')

      // next sirve para decirle que cualquier petición pasa por este middleware y que luego con la nueva configuración continúe con el siguiente middleware. En un register user, por ejemplo, los objetos req y res pasan primero por este middleware, luego por el jsonBodyParser de server.post('/users') y luego por el try, catch.
      next()
    })

    // register a user:
    server.post('/users', jsonBodyParser, (req, res) => {
      try {
        const { name, email, password } = req.body

        registerUser(name, email, password, (error) => {
          //ponemos por defecto que el status es un system error
          if (error) {
            let status = 500

            if (error instanceof DuplicityError) {
              status = 409
            }
            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })

            return
          }

          res.status(201).send()
        })
      } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
          status = 406
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    //login a user - authenticate
    server.post('/users/auth', jsonBodyParser, (req, res) => {
      try {
        const { email, password } = req.body

        authenticateUser(email, password, (error, userId) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            } else if (error instanceof CredentialsError) {
              status = 401
            }
            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })

            return
          }

          res.json(userId)
        })
      } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
          status = 406
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    // retrieve a user
    server.get('/users', (req, res) => {
      try {
        const userId = req.headers.authorization.substring(7)

        retrieveUser(userId, (error, user) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            }

            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })

            return
          }
          res.json(user)
        })
      } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
          status = 406
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    // retrieve posts
    server.get('/posts', (req, res) => {
      try {
        const userId = req.headers.authorization.substring(7)

        retrievePosts(userId, (error, posts) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            }

            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })

            return
          }
          res.json(posts)
        })
      } catch (error) {}
    })

    // retrieve fav posts
    // a nivel de ruta de api se puede poner así: devuélveme los posts que sean favs -> posts/favs.
    server.get('/posts/favs', (req, res) => {
      try {
        const userId = req.headers.authorization.substring(7)

        retrieveFavPosts(userId, (error, posts) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            }

            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })

            return
          }
          res.json(posts)
        })
      } catch (error) {}
    })

    // publish a post
    server.post('/posts', jsonBodyParser, (req, res) => {
      try {
        const userId = req.headers.authorization.substring(7)
        const { image, text } = req.body

        createPost(userId, image, text, (error) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            }

            res
              .status(400)
              .json({ error: error.constructor.name, message: error.message })

            return
          }

          res.status(201).send()
        })
      } catch (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    // like or unlike a post
    server.patch('/posts/:postId/likes', (req, res) => {
      try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params

        toggleLikePost(userId, postId, (error) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            }

            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })
          }
          res.status(204).send()
        })
      } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
          status = 406
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    // favourite or unfavourite a post
    server.patch('/posts/:postId/favs', (req, res) => {
      try {
        const userId = req.headers.authorization.substring(7)

        const { postId } = req.params

        toggleFavPost(userId, postId, (error) => {
          if (error) {
            let status = 500

            if (error instanceof NotFoundError) {
              status = 404
            }

            res
              .status(status)
              .json({ error: error.constructor.name, message: error.message })
          }
          res.status(204).send()
        })
      } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
          status = 406
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
      }
    })
    //le decimos al servidor que escuche en el puerto 8000, y que cuando arranque, nos envíe un chivato - un console.log

    server.listen(8000, () => console.log('server is up'))
  })
  .catch((error) => console.error(error))
