const NotFoundError = require('./not_found');
const UnauthorizedError = require('./unauthorized');
const ForbiddenError = require('./forbidden');
const ConflictError = require('./conflict-error');
const BadRequestError = require('./bad-request');

module.exports = {
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  ConflictError,
  BadRequestError,
};
