const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet')

// Express app
const app = express();

// configure static files and assets that will be used in the app
app.use(express.static("dist"))

// register view engine
app.set('view engine', 'ejs');

// in case views folder have another name like `myviews`
// app.set('views', 'myviews');

// listen for request
app.listen(3000);

app.use(express.static('public'))

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

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