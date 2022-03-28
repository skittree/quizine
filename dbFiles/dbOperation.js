const config = require('./dbConfig'),
    User = require('./user'),
    sql = require('mssql');

const getUsers = async() => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query('SELECT * FROM Users');
        console.log(users);
        return users;
    } catch (error) {
        console.log(error);
    }
}

const createUser = async(User) => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query(`INSERT INTO Users VALUES ('${User.uname}', '${User.pword}')`);
        console.log(users);
        return users;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUsers
}