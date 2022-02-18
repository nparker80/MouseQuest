const router = require('express').Router();
const { createPost, getAllPosts, getPostsByUserId } = require('../../../controllers/postController');

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/byuserid/', getPostsByUserId);

module.exports = router;