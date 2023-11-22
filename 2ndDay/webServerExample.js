const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader( 'Content-Type', 'text/plain' );
    response.end('2nd day task to send client request to node js application.\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});