# news-project-

Версия проекта: v 0.0.1

## Описание:
Реализован backend проекта news-api. Проект сохраняет данные пользователей и их статьи.

* Backend на поддомене: https://api.news-project.gq/

## Инструкция как развернуть проект:

npm install - установить зависимости.

npm run start - запускает live-server по адресу http://localhost:3000.

npm run dev - запускает live-server с hot-reload(nodemon).

* Запрос POST /signup создаёт пользователя;
* Запрос POST /signin вход пользователя;
* Запрос GET /users/me дает информацию о пользователе;
* Запрос GET /articles возвращает статьи всех пользователей;
* Запрос POST /articles создаёт статью;
* Запрос DELETE /articles/:Id удаляет конкретную статью;
