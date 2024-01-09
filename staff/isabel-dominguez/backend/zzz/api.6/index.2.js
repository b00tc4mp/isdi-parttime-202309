const http = require('http')

const server = http.createServer((req, res) => { //recive la petición con req y da una respuesta con res
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end('<html><head><title>hola mundo</title></head><body><h1>hello world</h1></body></html>');
});

server.listen(8000);