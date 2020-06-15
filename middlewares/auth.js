const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');
const { UnauthorizedError } = require('../status_errors');
const { AUTH_ERROR } = require('../errors-const');

module.exports = (req, res, next) => {
  let token = req.cookies.jwt;
  const { userToken } = req.headers;
  if (userToken.startsWith('Bearer ') && userToken) {
    token = userToken.replace('Bearer ', '');
  }

  if (!token) { throw new UnauthorizedError(AUTH_ERROR); }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) { throw new UnauthorizedError(AUTH_ERROR); }

  req.user = payload;

  next();
};
