const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet')
const mongoose = require('mongoose')
const Blog = require('../models/blogs');
const { render } = require('ejs');

// Express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@itstudentmdb.0dz73ax.mongodb.net/node-tuts?appName=ItStudentMdb';
mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch((error) => console.log(error));
// configure static files and assets that will be used in the app
// app.use(express.static("dist"))

// register view engine
app.set('view engine', 'ejs');

// in case views folder have another name like `myviews`
// app.set('views', 'myviews');

// listen for request

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());


app.get('/', (request, response) => {
    response.redirect('/blogs')
});

app.get('/about', (request, responce) => {
    responce.render('about', { title: "About" });
});

app.get('/blogs/create', (request, responce) => {
    responce.render('create', {title: 'Create'});
});

// post method for sending a new request so that it can be saved
app.post('/blogs', (request, response) => {
    
    const blog = new Blog(request.body);
    blog.save()
        .then(result => response.redirect('/blogs'))
        .catch(error => console.log(error))
})

app.get('/blogs/:id', (request, response) => {

    const id = request.params.id;
    Blog.findById(id)
        .then(result => response.render('details', {blog: result, title: 'Blog Details'}))
        .catch(error => console.log(error))
})

// redirects
app.get('/about-me', (request, responce) => {
    responce.redirect('/about');
});

app.get('/about-us', (request,responce) => {
    responce.redirect('/about');
});

// blog routes
app.get('/blogs', (request, response) => {

    Blog.find().sort({createdAt: - 1})
        .then(result => {
            response.render('index', {title: 'All Blogs', blogs: result})
        })
})

// 404 page
app.use((request, responce) => {
    responce.status(404).render('404', {title: 'notFound'});
});