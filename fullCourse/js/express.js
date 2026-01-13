import { createServer } from "node:http";

createServer((req, res) => {
    res.writeHead(200, {"content-type": 'text/html'})
    res.end('Christian Guhirwa');
}).listen(8080)