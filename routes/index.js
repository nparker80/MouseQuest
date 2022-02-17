// test
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { createView, renderHomePage, loginView, signupView } = require('../controllers/userController');
router.get('/', renderHomePage);
router.get('/createPost', createView);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

module.exports = router;