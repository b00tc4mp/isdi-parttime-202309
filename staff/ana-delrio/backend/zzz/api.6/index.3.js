const http = require('http')


// req: recibe la petición
// res: responde a la petición
const server = http.createServer((req, res) => {
    // enviamos un contenido de tipo json
    debugger
    res.writeHead(200, { 'Content-Type': 'application/json' })

    // cuerpo: convierto el objeto a texto, con el stringify
    res.end(JSON.stringify({ data: 'Hello World!' }))
})

server.listen(8000)