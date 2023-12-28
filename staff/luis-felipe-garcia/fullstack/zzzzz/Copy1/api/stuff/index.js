const http = require('http')

const server = http.createServer((req, res) => {

    // case 1
/*    res.writeHead(200, { 'Content-Type': 'application/json' })

    res.end(JSON.stringify({ data: 'Hello World' }))
})*/
//case 2
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end('<html><head><title>hola mundo</title></head><body><h1>Hola mundo</h1></body>')
})


server.listen(8000)