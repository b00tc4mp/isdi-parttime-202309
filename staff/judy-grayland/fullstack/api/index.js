const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const retrievePosts = require('./logic/retrievePosts')
const createPost = require('./logic/createPost')
const toggleLikePost = require('./logic/toggleLikePost')
const {
  SystemError,
  NotFoundError,
  ContentError,
  DuplicityError,
} = require('./utils/errors')

const server = express()

server.get('/', (req, res) => res.send('hello world'))

const jsonBodyParser = express.json()

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')

  next()
})

// register a user:
server.post('/users', jsonBodyParser, (req, res) => {
  try {
    const { name, email, password } = req.body

    registerUser(name, email, password, (error) => {
      if (error) {
        let status = 400

        if (error instanceof SystemError) {
          status = 500
        } else if (error instanceof DuplicityError) {
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
    let status = 400

    if (error instanceof ContentError) {
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
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })

        return
      }

      res.json(userId)
    })
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message })
  }
})

// retrieve a user
server.get('/users', (req, res) => {
  try {
    const userId = req.headers.authorization.substring(7)

    retrieveUser(userId, (error, user) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })

        return
      }
      res.json(user)
    })
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message })
  }
})

// retrieve posts
server.get('/posts', (req, res) => {
  try {
    const userId = req.headers.authorization.substring(7)

    retrievePosts(userId, (error, posts) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })

        return
      }
      res.json(posts)
    })
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message })
  }
})

// publish a post
server.post('/posts', jsonBodyParser, (req, res) => {
  try {
    const userId = req.headers.authorization.substring(7)
    const { image, text } = req.body

    createPost(userId, image, text, (error) => {
      if (error) {
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
        let status = 400

        if (error instanceof SystemError) {
          status = 500
        } else if (error instanceof NotFoundError) {
          status = 404
        }

        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
      }
      res.status(204).send()
    })
  } catch (error) {
    let status = 400

    if (error instanceof ContentError) {
      status = 406
    }
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message })
  }
})
//le decimos al servidor que escuche en el puerto 8000, y que cuando arranque, nos envíe un chivato - un console.log

server.listen(8000, () => console.log('server is up'))
