const {Sequelize} = require('sequelize');

module.exports = new Sequelize (
    "quizine",
    "postgres",
    "postgres",
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)