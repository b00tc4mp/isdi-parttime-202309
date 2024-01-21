const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')

const server = express()

server.get('/', (req, res) => res.send('hello world'))

const jsonBodyParser = express.json()

// register a user:
server.post('/users', jsonBodyParser, (req, res) => {
  try {
    const { name, email, password } = req.body

    registerUser(name, email, password, (error) => {
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
//le decimos al servidor que escuche en el puerto 8000, y que cuando arranque, nos envíe un chivato - un console.log

server.listen(8000, () => console.log('server is up'))
