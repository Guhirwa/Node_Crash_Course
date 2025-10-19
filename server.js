const http = require('http');

const server = http.createServer((request, responce) => {
    console.log(request.url, request.method);


    // set header content type
    responce.setHeader('Content-Type', 'text/plain');

    responce.write('Hello Christian Guhirwa');
    responce.end();
});

server.listen(3002, 'localhost', () => {
    console.log('listening for request on port 3002');
});