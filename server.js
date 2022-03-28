const express = require('express'),
    User = require('./dbFiles/user'),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

let tobe = new User('mark', 'mark');

// console.log(pavel);

dbOperation.createUser(tobe);

dbOperation.getUsers().then(res => {
    console.log(res)
})

