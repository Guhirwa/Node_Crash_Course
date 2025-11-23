const express = require('express');
const blogController = require('../../controller/blogController')

const router = express.Router();


router.get('/create', blogController.blog_create_get);
// post method for sending a new request so that it can be saved
router.post('/blogs', blogController.blog_create_post)
router.get('/:id', blogController.blog_details)
router.delete('/:id', blogController.blog_delete)
router.get('/', blogController.blog_index)

module.exports = router;