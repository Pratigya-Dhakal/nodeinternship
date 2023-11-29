const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((request, response) => {
    // console.log(request.url);
    if(request.url == "/"){
        response.end('2nd day task to send client request to node js application.\n');
    }
    else if(request.url == "/about") {
        response.end('Form about 2nd day task to send client request to node js application.\n');

    }
    else if(request.url == "/contact") {
        response.end('contact us Form about 2nd day task to send client request to node js application.\n');

    } else if(request.url == "/home") {
        response.end(' Home page hello\n');
    }
    else{
        response.end('<h1>404 Page do not exist</h1>\n');
    response.statusCode = 404;
    response.setHeader( 'Content-Type', 'text/plain' );
    }
    // response.statusCode = 200;
    // response.setHeader( 'Content-Type', 'text/plain' );
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});  