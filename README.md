# Тестовое задание frontend - Биржа

## Инструкция по работе с проектом 

1. Скачать репозиторий

```bash
git clone git@github.com:UtopicUnicorn/test-task-exchange-frontend.git
```
2. Перейти в директорию с проектом и установить необходимые пакеты

```bash
npm install
```

3. Запуск проекта

```bash
react-scripts start
```

4. Так как пользователя нельзя создать, для входа потребудется ввести логин и пароль: admin admin


## Реализованный основной функционал 

1. Возможность получать цены на покупку и продажу, в зависимости от инструмента;
2. Возможность создавать транзакции на покупку/продажи валюты;
3. Добавлена возможность смены статуса активной транзакции.

## Реализованный дополнительный функционал

1. Добавлена страница для аутентификации пользователя;
2. Добавлены защищенные роуты до страниц со взаимодействиями с данными;
3. Добавлена возможность экспорта данных в файл формата csv.

## Необходимые доработки

1. Добавить работу с полноценным api, для проверки корректности запросов добавить работу с json server в качестве заглушки
2. Переработать функции отвечающие за будущие запросы на сервер под async/await; 
3. Покрыть основной функционал тестами.

