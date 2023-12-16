const http = require('http')

const server = http.createServer((req, res) => { //recive la petición con req y da una respuesta con res
    res.writeHead(404, { 'Content-Type': 'text/html' });

    res.end('<html><head><title>not found</title></head><body><h1>NOT FOUND</h1></body></html>');
});

server.listen(8000);