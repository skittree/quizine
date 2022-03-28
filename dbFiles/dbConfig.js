const sql = require('mssql');

const config = {
    user: 'ibragim',
    password: 'foo',
    server: 'DESKTOP-VT29464',
    database: 'quizine',
    options: {
        instancename: 'SQLEXPRESS',
        trustServerCertificate: true // change to true for local dev / self-signed certs
    },
    port: 1433
}

module.exports = config;