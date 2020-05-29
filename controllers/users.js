const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = require('../models/user');
const { JWT_SECRET } = require('../config/config');
const { NotFoundError, UnauthorizedError } = require('../status_errors');

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
      }).send({ message: 'Авторизация прошла успешно' });
    })
    .catch(() => next(new UnauthorizedError('Неправильные почта или пароль')));
};

module.exports.getUser = (req, res, next) => {
  userModel.findById(req.user._id)
    .then((user) => {
      if (user === null) {
        throw new NotFoundError('Такой пользователь не найден');
      }
      return res.send({ data: user });
    })
    .catch(next);
};
