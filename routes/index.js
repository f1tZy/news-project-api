const router = require('express').Router();

const users = require('./users');
const articles = require('./articles');
const auth = require('../middlewares/auth');// middleware авторизации
const NotFoundError = require('../status_errors/not_found');
const { login, createUser } = require('../controllers/users');// авторизация и регистрация пользователя
const { signInValid, signUpValid } = require('../middlewares/validation');
const { NOT_FOUND } = require('../errors-const');

router.use('/articles', auth, articles);
router.use('/users', auth, users);

// запрос на логин, и тут же валидация через joi
router.post('/signin', signInValid, login);

// запрос на регистрацию пользователя, и тут же валидация через joi
router.post('/signup', signUpValid, createUser);

// ошибка на не существующий ресурс
router.use('*', (req, res, next) => {
  next(new NotFoundError(NOT_FOUND));
});

module.exports = router;
