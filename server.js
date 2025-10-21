const http = require('http');
const fileSystem = require('fs');
const _ = require('lodash');

const server = http.createServer((request, responce) => {
    
    //lodash
    const num = _.random(0, 20); 
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
    greet();



    // set header content type
    responce.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(request.url) {
        case '/':
            path += 'index.html';
            responce.statusCode = 200;
            break;
        case '/about/':
            path += 'about.html';
            responce.statusCode = 200;
            break;
            // Redirect
        case '/about-me/':
            responce.statusCode = 301;
            responce.setHeader('Location', '/about/');
            responce.end()
            break;
        default:
            path += '404.html';
            responce.statusCode = 404
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