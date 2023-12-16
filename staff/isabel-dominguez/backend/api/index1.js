const http = require('http')

const server = http.createServer((req, res) => { //recive la petición con req y da una respuesta con res
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

server.listen(8000);