import express from 'express'

// Express app
const app = express();

app.use(express.static("dist"))

// register view engine
app.set('view engine', 'ejs');

// in case views folder have another name like `myviews`
// app.set('views', 'myviews');

// listen for request
app.listen(3000);

app.get('/', (request, responce) => {
    responce.render('index', { title: "Home" });
});

app.get('/about', (request, responce) => {
    responce.render('about', { title: "Home" });
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