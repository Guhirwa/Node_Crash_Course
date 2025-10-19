const http = require('http');

const server = http.createServer((request, responce) => {
    console.log(request.url, request.method);


    // set header content type
    responce.setHeader('Content-Type', 'text/html');

    responce.write('<h1>Hello Christian Guhirwa</h1>');
    responce.write('<p>Has anyone ever told you howmuch we love you ?</p>')
    responce.end();
});

server.listen(3002, 'localhost', () => {
    console.log('listening for request on port 3002');
});