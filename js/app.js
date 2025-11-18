const express = require('express');

// Express app
const app = express();

app.use(express.static("dist"))

// register view engine
app.set('view engine', 'ejs');

// in case views folder have another name like `myviews`
// app.set('views', 'myviews');

// listen for request
app.listen(3000);

app.use((request, response, next) => {
    console.log('new request made');
    console.log('host: ', request.hostname);
    console.log('path: ', request.path);
    console.log('method: ', request.method);
    next();
});

app.use((request,response, next) => {
    console.log('in the next request')
    next();
});

app.get('/', (request, responce) => {
    const blogs = [
        {title: 'Christian finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Guhirwa finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];
    responce.render('index', { title: "Home", blogs });
});

app.get('/about', (request, responce) => {
    responce.render('about', { title: "About" });
});

app.get('/blogs/create', (request, responce) => {
    responce.render('create', {title: 'Create'});
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
    responce.status(404).render('404', {title: 'notFound'});
});