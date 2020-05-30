const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = require('../models/user');
const { JWT_SECRET } = require('../config/config');
const { NotFoundError, UnauthorizedError } = require('../status_errors');
const { INVALID_EMAIL_OR_PASS, AUTH_SUCCES, USER_NOT_FOUND } = require('../errors-const');

module.exports.createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  bcrypt.hash(password, 10)// хешируем пароль

    .then((hash) => userModel.create({
      name, email, password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
        name: user.name,
      });
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  // вытаскиваем функцию проверки юзера, если успешно выдаем токен, если нет-пробрасываем ошибку
  return userModel.findUsersData(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
      res.status(201).cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      }).send({ message: AUTH_SUCCES });
    })
    .catch(() => next(new UnauthorizedError(INVALID_EMAIL_OR_PASS)));
};

module.exports.getUser = (req, res, next) => {
  userModel.findById(req.user._id)
    .then((user) => {
      if (user === null) {
        throw new NotFoundError(USER_NOT_FOUND);
      }
      return res.send({ data: user });
    })
    .catch(next);
};
