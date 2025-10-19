const http = require('http');
const fileSystem = require('fs')

const server = http.createServer((request, responce) => {
    console.log(request.url, request.method);


    // set header content type
    responce.setHeader('Content-Type', 'text/html');

    // send html file
    fileSystem.readFile('./views/index.html', (error, data) => {
        if(error) {
            console.log(error);
            responce.end()
        } else {
            responce.write(data);
            responce.end();
        }
    })

});

server.listen(3002, 'localhost', () => {
    console.log('listening for request on port 3002');
});