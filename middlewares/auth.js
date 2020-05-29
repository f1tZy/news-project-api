const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');
const { UnauthorizedError } = require('../status_errors');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) { throw new UnauthorizedError('Ошибка авторизации'); }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) { throw new UnauthorizedError('Ошибка авторизации'); }

  req.user = payload;

  next();
};
