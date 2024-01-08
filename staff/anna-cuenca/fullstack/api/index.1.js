// esto será mi server, voy a arrancar un proceso con node que me abre un puerto
// se usa el paquete http

const http = require('http')

// todos los datos ded petición están montados en el objeto req

// Y te crea otro objeto res, en el cual puedes responder al cliente

server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // responde con un 200 (significa que ha ido bien) y le envio un cuerpo para configurar cabeceras
    // le estoy indicando a quien me llame que te voy a enviar un contenido de tipo JSON
    res.end(JSON.stringify({
        data: 'Hello, World',
        //y aquí envío el JSON. Es un objeto que convierto a texto (con el stringify)
        // y ese texto lo devuelvo al cliente que me ha llamado 
    }))
})

server.listen(8000);