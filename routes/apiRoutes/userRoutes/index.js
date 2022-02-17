const router = require('express').Router();
const {
    login,
    signupHandler,
    logout,
    globalPostView,
} = require('../../../controllers/userController');

router.route('/')
router.route('/globalPostPage', globalPostView);
router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;