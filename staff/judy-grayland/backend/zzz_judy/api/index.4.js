const express = require('express')
const registerUser = require('../api.5/logic/registerUser')

const server = express()

// No ponemos el status, porque por defecto es 200
//si alguien llama a esta ruta ('/') respondemos con un hello world
// el content type es text/html por defecto
//(req, res) => res.send('hello world') es el middleware
server.get('/', (req, res) => res.send('hello world'))

// Test in browser: http://localhost:8000/hello?name=judy&surname=gray

// (req, res) => res.send(`Hello, ${req.query.name} ${req.query.surname}!`) es el middleware

server.get('/hello', (req, res) =>
  res.send(`Hello, ${req.query.name} ${req.query.surname}!`)
)

// TEST in browser GET http://localhost:8000/register?name=Pepito+Grillo&email=pepito@grillo.com&password=123123123
server.get('/register', (req, res) => {
  try {
    const { name, email, password } = req.query

    registerUser(name, email, password, (error) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })

        return
      }

      // el 201 significa creado. no mandamos ningún body de respuesta.
      res.status(201).send()
    })
  } catch (error) {}
})

//le decimos al servidor que escuche en el puerto 8000, y que cuando arranque, nos envíe un chivato - un console.log

server.listen(8000, () => console.log('server is up'))
