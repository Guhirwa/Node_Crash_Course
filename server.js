const http = require('http');
const fileSystem = require('fs')

const server = http.createServer((request, responce) => {
    console.log(request.url, request.method);


    // set header content type
    responce.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(request.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about/':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break; 
    }

    // send html file
    fileSystem.readFile(path, (error, data) => {
        if(error) {
            console.log(error);
            responce.end()
        } else {
            // responce.write(data); if we are passing only one data or readed page we can pass it dirrectly to the end()
            responce.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});