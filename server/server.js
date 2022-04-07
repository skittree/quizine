require('dotenv').config();

const express = require('express'),
    sequelize = require('./db'),
    models = require('./models'),
    cors = require('cors'),
    router = require('./routes/index'),
    errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

    } catch (error) {
        console.log(error);
    }
}

start();
