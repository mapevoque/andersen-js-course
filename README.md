# Andersen JS Course

1)Запустить сервер MongoDB на порте 27017
2)Запустить сервер node server.js
3)Через postman добавить информацию в БД с помощью POST http://localhost:3012/cars в Json формате, пример: {"name": "Infinity G37x USA"}
4)Перейти на http://localhost:3012/cars

Работа с БД:
1)Через postman добавить информацию в БД с помощью POST http://localhost:3012/cars в Json формате, пример: {"name": "Infinity G37x USA"}
2)Удалить данные из БД с помощью DELETE  http://localhost:3012/cars/ID 
3)Искать данные по ID с помощью GET http://localhost:3012/cars/ID
4)Обновить данные с помомщью PUT http://localhost:3012/cars/ID

К сожалению на клиенте не удалось реализовать управление данными :(