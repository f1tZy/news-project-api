const router = require('express').Router();

const { getUser } = require('../controllers/users');

// получения пользователя по id
router.get('/me', getUser);

module.exports = router;
