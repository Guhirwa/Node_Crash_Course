const express = require('express');
const Blog = require('../../models/blogs');

const router = express.Router();


router.get('/create', (request, responce) => {
    responce.render('create', {title: 'Create'});
});

// post method for sending a new request so that it can be saved
router.post('/blogs', (request, response) => {
    
    const blog = new Blog(request.body);
    blog.save()
        .then(result => response.redirect('/blogs'))
        .catch(error => console.log(error))
})

router.get('/:id', (request, response) => {

    const id = request.params.id;
    Blog.findById(id)
        .then(result => response.render('details', {blog: result, title: 'Blog Details'}))
        .catch(error => response.status(404).render('404', {title: 'Blog Not Found'}))
})

router.delete('/:id', (request, response) => {
    const id = request.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            response.json({ redirect: '/blogs' });
        })
        .catch(error => console.log(error))
})

router.get('/', (request, response) => {

    Blog.find().sort({createdAt: - 1})
        .then(result => {
            response.render('index', {title: 'All Blogs', blogs: result})
        })
})

module.exports = router;