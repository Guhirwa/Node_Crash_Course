const express = require('express');

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

app.get('/about-us', (request,responce) => {
    responce.redirect('/about');
})

// 404 page
app.use((request, responce) => {
    responce.status(404).sendFile('./views/404.html', { root: __dirname })
})