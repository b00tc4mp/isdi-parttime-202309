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

// middleware:como un json.parse que te permite convertir cualquier petición que le enviemos al servidor con un json lo convierta a objeto en la propiedad body del request. ie. si le envías un json al servidor lo sabrá interpetar gracias a este middleware, que luego pasamos dentro del post como la propiedad body en el objeto req:
const jsonBodyParser = express.json()

server.post('/register', jsonBodyParser, (req, res) => {
  try {
    const { name, email, password } = req.body

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
