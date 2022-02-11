const router = require('express').Router();
const { createPost } = require('../../../controllers/PostController');

router.post('/', createPost);

module.exports = router;
