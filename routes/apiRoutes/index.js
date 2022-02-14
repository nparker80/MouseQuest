const router = require('express').Router();
const userPosts = require('./postRoutes')
const userRoutes = require('./userRoutes');

router.use('/posts', userPosts)
router.use('/users', userRoutes);

module.exports = router;