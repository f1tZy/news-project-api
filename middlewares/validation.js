const { celebrate, Joi } = require('celebrate');

const signInValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const signUpValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const articleDeleteValid = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
});

const articleСreationValid = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().min(1).required(),
    title: Joi.string().min(1).required(),
    text: Joi.string().min(1).required(),
    date: Joi.string().min(1).required(),
    source: Joi.string().min(1).required(),
    link: Joi.string().uri().required().regex(/(http(s)?:\/\/)?([a-z0-9-]{2,}\.(.[a-z0-9]+)+|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})(:[0-9]+)?(\/.*)?/),
    image: Joi.string().uri().required().regex(/(http(s)?:\/\/)?([a-z0-9-]{2,}\.(.[a-z0-9]+)+|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})(:[0-9]+)?(\/.*)?/),
  }),
});

module.exports = {
  articleDeleteValid,
  articleСreationValid,
  signInValid,
  signUpValid,
};
