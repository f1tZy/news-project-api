const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');
const { UnauthorizedError } = require('../status_errors');
const { AUTH_ERROR } = require('../errors-const');

module.exports = (req, res, next) => {
  let token = req.cookies.jwt;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer ')) {
    token = authorization.replace('Bearer ', '');
  }

  if (!token) { throw new UnauthorizedError(AUTH_ERROR); }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) { throw new UnauthorizedError(AUTH_ERROR); }

  req.user = payload;

  next();
};
