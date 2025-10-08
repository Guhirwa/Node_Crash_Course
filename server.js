const http = require('http');

const server = http.createServer((request, responce ) => {
    console.log(request.url, request.method);
});

server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000")
}); 