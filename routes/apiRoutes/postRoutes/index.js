const router = require('express').Router();
const { createPost, getAllPosts, getPostsByUsername } = require('../../../controllers/PostController');

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/byusername/', getPostsByUsername);

module.exports = router;