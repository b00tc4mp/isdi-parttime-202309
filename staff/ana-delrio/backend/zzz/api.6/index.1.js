// otro ejemplo pero devolviendo HTML

const http = require('http')

// req: recibe la petición
// res: responde a la petición
const server = http.createServer((req, res) => {
    // enviamos un contenido de tipo json
    res.writeHead(200, { 'Content-Type': 'text/html' })

    // cuerpo: convierto el objeto a texto, con el stringify
    res.end('<html><head><title>hola mundo</title></head><body><h1>hello world</h1></body></html>')
})

server.listen(8000)