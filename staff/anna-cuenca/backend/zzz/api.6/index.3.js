// aqui montamos un server rápido

const express = require('express')

const registerUser = require('./logic/registerUser') // el requiere es como el input

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

//manera pro de hacer un registro de verdad
server.get('/register', (req, res) => {
    const { name, email, password } = req.query

    try {
        registerUser(name, email, password, error => {
            if (error) {
                // no hacemos un callback(error), le indicamos al navegador el tipo de error en forma de respuesta (res)
                res.status(400).json({ error: error.constructor.name, message: error.message })
                return
            }

            res.status(201).send() //todo ha ido bien, se lo indicamos al navegador
        })

    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})
server.listen(8000, () => console.log('server is up'))