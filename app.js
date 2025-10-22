const express = require('express');

// Express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// in case view folder have another name like `myviews`
// app.set('views', 'myviews');

// listen for request
app.listen(3000);

app.get('/', (request, responce) => {
    responce.render('index');
});

app.get('/about', (request, responce) => {
    responce.render('about');
});

app.get('/blogs/create', (request, responce) => {
    responce.render('create');
});

// redirects
app.get('/about-me', (request, responce) => {
    responce.redirect('/about');
});

app.get('/about-us', (request,responce) => {
    responce.redirect('/about');
});

// 404 page
app.use((request, responce) => {
    responce.status(404).render('404');
});