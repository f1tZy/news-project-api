const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const { INVALID_EMAIL, NOT_UNIQUE_EMAIL } = require('../errors');// ошибки с errors.js

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});

userSchema.plugin(uniqueValidator, NOT_UNIQUE_EMAIL);
userSchema.path('email').validate(validator.isEmail, INVALID_EMAIL);

// проверяем данные пользователя
userSchema.statics.findUsersData = function checkUser(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      return bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
