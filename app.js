require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logs');
const { errorHandler } = require('./middlewares/error-handler');
const NotFoundError = require('./status_errors/not_found');

const router = require('./routes/index');// роутер карточек и пользователя
const { PORT, DATA_URL } = require('./config/config');
const { login, createUser } = require('./controllers/users');// авторизация и регистрация пользователя
const { signInValid, signUpValid } = require('./middlewares/validation');
const limite = require('./middlewares/rate_limiter');// limiter из отдельного файла

const app = express();

// подключаем лимит для ограничения запросов nginx
app.use(limite);

// подключаем helmet
app.use(helmet());

app.use(cookieParser());

mongoose.connect(DATA_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// подключаем bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// подключаем логи запросов
app.use(requestLogger);

// общий запрос на роутер
app.use(router);

// запрос на логин, и тут же валидация через joi
app.post('/signin', signInValid, login);

// запрос на регистрацию пользователя, и тут же валидация через joi
app.post('/signup', signUpValid, createUser);

// ошибка на не существующий ресурс
app.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

// логи ошибок
app.use(errorLogger);

// делаем ошибки joi в формате json
app.use(errors());

// обработка 500ой ошибки
app.use(errorHandler);

// запускаем сервер на 3000 порте
app.listen(PORT);
