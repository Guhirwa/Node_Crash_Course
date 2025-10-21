const express = require('express');
const fileSystem = require('fs');
const { request } = require('http');

// Express app
const app = express();

// listen for request
app.listen(3000);

app.get('/', (request, responce) => {
    responce.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (request, responce) => {
    responce.sendFile('./views/about.html', { root: __dirname });
})

// redirects
app.get('/about-me', (request, responce) => {
    responce.redirect('/about');
})


// 404 page

