# news-project-api

Версия проекта: v 0.0.1

## Описание:
Backend проекта news-project. Создание виртуальной машины и деплой проекта на публичный сервер, развертывание сервера на удалённой виртуальной машине. Проект сохраняет данные пользователей и их статьи. 

## [Ссылка на backend](https://api.news-project.gq/)

## Стек: Node.js, Express.js, MongoDB.

## Инструкция как развернуть проект:
* Скопировать репозиторий 
```sh
git clone https://github.com/f1tZy/Regular-Expressions.git
```

* Установить зависимости
```sh
npm install
```

* Запускает live-server по адресу http://localhost:3000.
```sh
npm run start
```

* Запускает live-server в режиме разработки с hot-reload(nodemon).
```sh
npm run dev
```

* Запрос POST /signup создаёт пользователя;
* Запрос POST /signin вход пользователя;
* Запрос GET /users/me дает информацию о пользователе;
* Запрос GET /articles возвращает статьи всех пользователей;
* Запрос POST /articles создаёт статью;
* Запрос DELETE /articles/:Id удаляет конкретную статью;
