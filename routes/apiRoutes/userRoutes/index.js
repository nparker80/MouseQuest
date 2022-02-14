const router = require('express').Router();
const {
    createUser,
    login,
    signupHandler,
    logout,
    verifyUser,
} = require('../../../controllers/userController');

router.route('/')
    .post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify', verifyUser);


module.exports = router;
