// сообщения об ошибках в конструкторы
const INVALID_LINK = 'Неверная ссылка';
const INVALID_EMAIL = 'Неверная почта';
const NOT_UNIQUE_EMAIL = 'Такая почта уже занята, введите другую';
const SERVER_ERROR = 'На сервере произошла ошибка';
const INVALID_EMAIL_OR_PASS = 'Неправильные почта или пароль';
const AUTH_ERROR = 'Ошибка авторизации';
const AUTH_SUCCES = 'Авторизация прошла успешно';
const USER_NOT_FOUND = 'Такой пользователь не найден';
const NOT_AUTHOR = 'Нет доступа. Вы не создатель';
const ARTICLE_NOT_FOUND = 'Невозможно удалить статью, статья не найдена';
const NOT_FOUND = 'Запрашиваемый ресурс не найден';
const CREATE_USER_ERROR = 'Ошибка создания пользователя';
const BAD_REQ = 'Неправильный запрос';

// сообщения об ошибках в валидацию joi
const PASS_ERROR = 'Слишком короткий пароль';
const ID_LENGTH = 'Длина ID карточки должна быть не меньше 24 символов';
const INVALID_NAME = 'Имя должно содержать от 2 до 30 символов';
const WRONG_KEYWORD = 'Ошибка, не верный формат ключевого поля';
const WRONG_TITLE = 'Ошибка, не верный формат названия';
const WRONG_TEXT = 'Ошибка, не верный формат текста';
const WRONG_DATE = 'Ошибка, не верный формат даты';
const WRONG_SOURSE = 'Ошибка, не верный формат ссылки ресура';


module.exports = {
  INVALID_LINK,
  INVALID_EMAIL,
  NOT_UNIQUE_EMAIL,
  SERVER_ERROR,
  PASS_ERROR,
  WRONG_KEYWORD,
  INVALID_NAME,
  INVALID_EMAIL_OR_PASS,
  AUTH_ERROR,
  AUTH_SUCCES,
  USER_NOT_FOUND,
  NOT_AUTHOR,
  ARTICLE_NOT_FOUND,
  ID_LENGTH,
  NOT_FOUND,
  CREATE_USER_ERROR,
  BAD_REQ,
  WRONG_TITLE,
  WRONG_TEXT,
  WRONG_DATE,
  WRONG_SOURSE,
};
