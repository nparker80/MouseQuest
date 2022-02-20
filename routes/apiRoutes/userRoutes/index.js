const router = require('express').Router();
const {
    login,
    signupHandler,
    logout,
    globalPostView,
} = require('../../../controllers/userController');


router.get('/gpp', globalPostView);
router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;