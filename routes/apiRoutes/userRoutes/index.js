// test
const router = require('express').Router();
const {
    createUser,
    login,
    signupHandler,
    logout,
    globalPostView,
} = require('../../../controllers/userController');

router.route('/')
    .post(createUser);
router.route('/globalPostPage', globalPostView);
router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;