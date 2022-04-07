const {Sequelize} = require('sequelize');

module.exports = new Sequelize (
    "quizine", // название базы данных
    "postgres", // имя для входа
    "postgres", // пароль для входа
    {
        dialect: 'postgres', // название средыб для miicrosoft sql это будет вроде mssql
        host: 'localhost', // тут не трогаем
        port: 5432 // тут тоже не нужно, порт бд по дефолту 5432
    }
)