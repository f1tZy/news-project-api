const { celebrate, Joi } = require('celebrate');
const {
  INVALID_LINK,
  PASS_ERROR,
  INVALID_EMAIL,
  WRONG_KEYWORD,
  INVALID_NAME,
  ID_LENGTH,
  WRONG_TITLE,
  WRONG_TEXT,
  WRONG_DATE,
  WRONG_SOURSE,
} = require('../errors-const');

const signInValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().error(new Error(INVALID_EMAIL)),
    password: Joi.string().required().min(8).error(new Error(PASS_ERROR)),
  }),
});

const signUpValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .error(new Error(INVALID_NAME)),
    email: Joi.string().required().email().error(new Error(INVALID_EMAIL)),
    password: Joi.string().required().min(8).error(new Error(PASS_ERROR)),
  }),
});

const articleDeleteValid = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).error(new Error(ID_LENGTH)),
  }),
});

const articleСreationValid = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().min(2).required().error(new Error(WRONG_KEYWORD)),
    title: Joi.string().min(2).required().error(new Error(WRONG_TITLE)),
    text: Joi.string().min(2).required().error(new Error(WRONG_TEXT)),
    date: Joi.string().min(2).required().error(new Error(WRONG_DATE)),
    source: Joi.string().min(2).required().error(new Error(WRONG_SOURSE)),
    link: Joi.string().uri().required().regex(/(http(s)?:\/\/)?([a-z0-9-]{2,}\.(.[a-z0-9]+)+|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})(:[0-9]+)?(\/.*)?/)
      .error(new Error(INVALID_LINK)),
    image: Joi.string().uri().required().regex(/(http(s)?:\/\/)?([a-z0-9-]{2,}\.(.[a-z0-9]+)+|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})(:[0-9]+)?(\/.*)?/)
      .error(new Error(INVALID_LINK)),
  }),
});

module.exports = {
  articleDeleteValid,
  articleСreationValid,
  signInValid,
  signUpValid,
};
