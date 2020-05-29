const router = require('express').Router();

const users = require('./users');
const articles = require('./articles');
const auth = require('../middlewares/auth');// middleware авторизации

router.use('/articles', auth, articles);
router.use('/users', auth, users);

module.exports = router;
